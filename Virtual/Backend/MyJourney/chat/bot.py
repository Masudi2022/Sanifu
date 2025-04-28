import spacy
import random
import string
from spacy.matcher import PhraseMatcher
from .faq_data import faq_data
from .responses import responses
from difflib import SequenceMatcher

# Thresholds
SIMILARITY_THRESHOLD = 0.75
FUZZY_THRESHOLD = 0.6

# Private variables to hold loaded resources
_nlp = None
_phrase_matcher = None
_intent_examples = None
_intent_docs = None

def clean_input(text):
    text = text.translate(str.maketrans('', '', string.punctuation))
    return " ".join(text.lower().strip().split())

def load_resources():
    global _nlp, _phrase_matcher, _intent_examples, _intent_docs

    if _nlp is None:
        print("Loading NLP model and preparing intent examples...")  # For debug
        _nlp = spacy.load("en_core_web_md")

        # Initialize PhraseMatcher
        _phrase_matcher = PhraseMatcher(_nlp.vocab, attr="LOWER")

        _intent_examples = {}
        _intent_docs = {}

        for intent, examples in faq_data.items():
            cleaned_examples = [clean_input(ex) for ex in examples]
            docs = list(_nlp.pipe(cleaned_examples))
            _phrase_matcher.add(intent, docs)
            _intent_examples[intent] = cleaned_examples
            _intent_docs[intent] = docs

def fuzzy_similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()

def get_intent(user_input):
    load_resources()  # Ensure everything is loaded

    cleaned_input = clean_input(user_input)
    doc = _nlp(cleaned_input)
    scores = {}

    # 1. Phrase Matching
    matches = _phrase_matcher(doc)
    for match_id, start, end in matches:
        intent = _nlp.vocab.strings[match_id]
        match_length = end - start
        scores[intent] = scores.get(intent, 0) + (match_length * 2)

    # 2. Semantic similarity (Doc-to-Doc)
    for intent, example_docs in _intent_docs.items():
        best_sim = max(doc.similarity(example_doc) for example_doc in example_docs)
        if best_sim >= SIMILARITY_THRESHOLD:
            scores[intent] = scores.get(intent, 0) + (best_sim * 1.5)

    # 3. Fuzzy string match
    for intent, examples in _intent_examples.items():
        best_fuzzy = max(fuzzy_similarity(cleaned_input, ex) for ex in examples)
        if best_fuzzy >= FUZZY_THRESHOLD:
            scores[intent] = scores.get(intent, 0) + best_fuzzy

    return max(scores, key=scores.get) if scores else "unknown"

def get_response(user_input):
    intent = get_intent(user_input)
    return random.choice(responses.get(intent, responses["unknown"]))
