from rest_framework import serializers
from .models import *

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class ChatKnowledgeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ChatKnowledge
        fields = '__all__'
