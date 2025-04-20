# urls.py
from django.urls import path
import feedback.views as feedback_view
import chat.views as chat_view

urlpatterns = [
    path('feedback/', feedback_view.feedback_api),
    path('feedback/<int:pk>/', feedback_view.feedback_api),

    path("chat/", chat_view.chat_response, name="chatbot-response"),
    path('chat/history/<str:session_id>/', chat_view.chat_history),
    path('chat/knowledge/', chat_view.chat_knowledge),
    path('chat_bot/', chat_view.chatbot_view),
]
