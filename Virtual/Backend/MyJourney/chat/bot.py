import spacy
import random
import string
from spacy.matcher import PhraseMatcher
from .faq_data import faq_data
from .responses import responses
from difflib import SequenceMatcher

# Load spaCy model with vectors
nlp = spacy.load("en_core_web_md")

# Thresholds
SIMILARITY_THRESHOLD = 0.75
FUZZY_THRESHOLD = 0.6

# Clean input: lowercase, remove punctuation, normalize spaces
def clean_input(text):
    text = text.translate(str.maketrans('', '', string.punctuation))
    return " ".join(text.lower().strip().split())

# Initialize PhraseMatcher
phrase_matcher = PhraseMatcher(nlp.vocab, attr="LOWER")

# Store original and cleaned examples
intent_examples = {}
intent_docs = {}

# Preprocess all intent examples and store their Doc objects
for intent, examples in faq_data.items():
    cleaned_examples = [clean_input(ex) for ex in examples]
    docs = list(nlp.pipe(cleaned_examples))
    phrase_matcher.add(intent, docs)
    intent_examples[intent] = cleaned_examples
    intent_docs[intent] = docs

# Fuzzy similarity
def fuzzy_similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()

def get_intent(user_input):
    cleaned_input = clean_input(user_input)
    doc = nlp(cleaned_input)
    scores = {}

    # 1. Phrase Matching
    matches = phrase_matcher(doc)
    for match_id, start, end in matches:
        intent = nlp.vocab.strings[match_id]
        match_length = end - start
        scores[intent] = scores.get(intent, 0) + (match_length * 2)

    # 2. Semantic similarity (Doc-to-Doc)
    for intent, example_docs in intent_docs.items():
        best_sim = max(doc.similarity(example_doc) for example_doc in example_docs)
        if best_sim >= SIMILARITY_THRESHOLD:
            scores[intent] = scores.get(intent, 0) + (best_sim * 1.5)

    # 3. Fuzzy string match
    for intent, examples in intent_examples.items():
        best_fuzzy = max(fuzzy_similarity(cleaned_input, ex) for ex in examples)
        if best_fuzzy >= FUZZY_THRESHOLD:
            scores[intent] = scores.get(intent, 0) + best_fuzzy

    return max(scores, key=scores.get) if scores else "unknown"

def get_response(user_input):
    intent = get_intent(user_input)
    return random.choice(responses.get(intent, responses["unknown"]))
