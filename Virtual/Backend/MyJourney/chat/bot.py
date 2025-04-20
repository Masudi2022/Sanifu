import spacy
import random
import string
from spacy.matcher import PhraseMatcher
from .faq_data import faq_data
from .responses import responses

# Load medium model with vectors
nlp = spacy.load("en_core_web_md")

def clean_input(text):
    text = text.lower().translate(str.maketrans('', '', string.punctuation))
    return " ".join(text.split())  # Normalize spaces

# PhraseMatcher setup
phrase_matcher = PhraseMatcher(nlp.vocab, attr="LOWER")
for intent, examples in faq_data.items():
    patterns = [nlp.make_doc(clean_input(example)) for example in examples]
    phrase_matcher.add(intent, patterns)

def get_intent(user_input):
    doc = nlp(clean_input(user_input))

    # Rule-based: PhraseMatcher
    matches = phrase_matcher(doc)
    if matches:
        match_scores = {}
        for match_id, start, end in matches:
            intent = nlp.vocab.strings[match_id]
            span_len = end - start
            confidence = span_len / len(doc)  # normalize match confidence
            if confidence > 0.6:  # only count strong matches
                match_scores[intent] = max(match_scores.get(intent, 0), confidence)
        if match_scores:
            return max(match_scores, key=match_scores.get)

    # Fallback: Vector similarity
    similarity_scores = {}
    for intent, examples in faq_data.items():
        for example in examples:
            example_doc = nlp(clean_input(example))
            similarity = doc.similarity(example_doc)
            similarity_scores[intent] = max(similarity_scores.get(intent, 0), similarity)

    best_match = max(similarity_scores, key=similarity_scores.get)
    return best_match if similarity_scores[best_match] > 0.78 else "unknown"

def get_response(user_input):
    intent = get_intent(user_input)
    return random.choice(responses.get(intent, responses["unknown"]))


# import spacy
# import random
# import string
# from .faq_data import faq_data
# from .responses import responses

# nlp = spacy.load("en_core_web_md")

# def clean_input(text):
#     return text.translate(str.maketrans('', '', string.punctuation)).lower()

# def get_intent(user_input):
#     user_doc = nlp(clean_input(user_input))
#     scores = {}

#     for intent, examples in faq_data.items():
#         for example in examples:
#             example_doc = nlp(clean_input(example))
#             similarity = user_doc.similarity(example_doc)
#             scores[intent] = max(scores.get(intent, 0), similarity)

#     best_match = max(scores, key=scores.get)
#     return best_match if scores[best_match] > 0.70 else "unknown"

# def get_response(user_input):
#     intent = get_intent(user_input)
#     return random.choice(responses.get(intent, responses["unknown"]))

