from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from .models import Message, ChatKnowledge
from .serializers import MessageSerializer, ChatKnowledgeSerializer
from difflib import get_close_matches
from .bot import *
import requests

@api_view(['POST'])
def chat_response(request):
    user_text = request.data.get('message')
    session_id = request.data.get('session_id')

    # Save user message
    Message.objects.create(sender='user', text=user_text, session_id=session_id)

    # Load knowledge base and match
    knowledge = ChatKnowledge.objects.all()
    questions = [item.question for item in knowledge]
    
    match = get_close_matches(user_text, questions, n=1, cutoff=0.5)

    if match:
        matched_q = match[0]
        answer = ChatKnowledge.objects.get(question=matched_q).answer
    else:
        answer = "Hmm 🤔 I'm not sure yet. Can you teach me that?"

    # Save bot reply
    Message.objects.create(sender='bot', text=answer, session_id=session_id)

    return Response({"reply": answer})


@api_view(['GET'])
def chat_history(request, session_id):
    messages = Message.objects.filter(session_id=session_id).order_by('timestamp')
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def chat_knowledge(request):
    knowledge = ChatKnowledge.objects.all()
    serializer = ChatKnowledgeSerializer(knowledge, many=True)
    return Response(serializer.data)




@api_view(['POST'])
def chatbot_view(request):
    user_message = request.data.get('message')
    session_id = request.data.get('session_id')

    # Save user message
    Message.objects.create(sender='user', text=user_message, session_id=session_id)

    # Simulate bot reply
    bot_reply = f"You said: {user_message}"  # Replace with real logic or AI integration

    # Save bot reply
    Message.objects.create(sender='bot', text=bot_reply, session_id=session_id)

    return Response({'reply': bot_reply})

# chatbot/views.py



 

@api_view(["POST"])
def chat_response(request):
    user_input = request.data.get("message", "")
    reply = get_response(user_input)
    return Response({"response": reply})




