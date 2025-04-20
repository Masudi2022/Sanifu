import spacy
import random
import string
from spacy.matcher import PhraseMatcher
from .faq_data import faq_data
from .responses import responses
from difflib import SequenceMatcher

# Load spaCy model once
nlp = spacy.load("en_core_web_md")

# Thresholds
SIMILARITY_THRESHOLD = 0.75
FUZZY_THRESHOLD = 0.6

# Clean input: lowercase, strip punctuation, normalize spaces
def clean_input(text):
    text = text.translate(str.maketrans('', '', string.punctuation))
    return " ".join(text.lower().strip().split())

# Initialize PhraseMatcher
phrase_matcher = PhraseMatcher(nlp.vocab, attr="LOWER")

# Prepare intent vectors and add phrase patterns
intent_vectors = {}
intent_examples = {}  # Keep raw examples for fuzzy matching

for intent, examples in faq_data.items():
    cleaned_examples = [clean_input(ex) for ex in examples]
    docs = list(nlp.pipe(cleaned_examples))
    phrase_matcher.add(intent, docs)
    intent_examples[intent] = cleaned_examples

    # Vector centroid
    if docs:
        avg_vector = sum(doc.vector for doc in docs) / len(docs)
        intent_vectors[intent] = avg_vector

# Fuzzy string similarity
def fuzzy_similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()

def get_intent(user_input):
    cleaned_input = clean_input(user_input)
    doc = nlp(cleaned_input)

    scores = {}

    # 1. Phrase Matcher (Exact phrase match)
    matches = phrase_matcher(doc)
    for match_id, start, end in matches:
        intent = nlp.vocab.strings[match_id]
        match_length = end - start
        scores[intent] = scores.get(intent, 0) + (match_length * 2)  # higher weight

    # 2. Semantic Similarity
    for intent, vector in intent_vectors.items():
        similarity = doc.vector_norm and doc.similarity(vector) or 0
        if similarity >= SIMILARITY_THRESHOLD:
            scores[intent] = scores.get(intent, 0) + (similarity * 1.5)

    # 3. Fuzzy Matching on examples
    for intent, examples in intent_examples.items():
        best_fuzzy = max(fuzzy_similarity(cleaned_input, ex) for ex in examples)
        if best_fuzzy >= FUZZY_THRESHOLD:
            scores[intent] = scores.get(intent, 0) + best_fuzzy

    # Return best intent or unknown
    if scores:
        return max(scores, key=scores.get)
    return "unknown"

def get_response(user_input):
    intent = get_intent(user_input)
    return random.choice(responses.get(intent, responses["unknown"]))
