from django.db import models

# Create your models here.
from django.db import models

class Message(models.Model):
    sender = models.CharField(max_length=10)  # 'user' or 'bot'
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    session_id = models.CharField(max_length=100)  # to track conversations by session

    def __str__(self):
        return f"{self.sender}: {self.text[:30]}..."
    

class ChatKnowledge(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()

    def __str__(self):
        return self.question


