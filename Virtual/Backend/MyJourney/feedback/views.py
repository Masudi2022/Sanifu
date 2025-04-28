from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Feedback
from .serializers import FeedbackSerializer

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def feedback_api(request, pk=None):
    # GET all feedbacks
    if request.method == 'GET' and not pk:
        feedbacks = Feedback.objects.all().order_by('-submitted_at')
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data)

    # GET single feedback
    elif request.method == 'GET' and pk:
        try:
            feedback = Feedback.objects.get(pk=pk)
            serializer = FeedbackSerializer(feedback)
            return Response(serializer.data)
        except Feedback.DoesNotExist:
            return Response({"error": "Feedback not found"}, status=status.HTTP_404_NOT_FOUND)

    # POST (create new feedback)
    elif request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            # Save the feedback to the database
            feedback = serializer.save()

            # Send an email with the feedback details
            send_mail(
                'New Feedback Received',  # Email subject
                f'You have received a new feedback:\n\n'
                f'Name: {feedback.name}\n'
                f'Email: {feedback.email}\n'
                f'Message: {feedback.message}\n'
                f'Submitted at: {feedback.submitted_at}',  # Email message
                settings.DEFAULT_FROM_EMAIL,  # From email
                ['salummasud54@gmail.com'],  # Your email where feedback is sent
                fail_silently=False,
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # PUT (update feedback)
    elif request.method == 'PUT' and pk:
        try:
            feedback = Feedback.objects.get(pk=pk)
        except Feedback.DoesNotExist:
            return Response({"error": "Feedback not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = FeedbackSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE feedback
    elif request.method == 'DELETE' and pk:
        try:
            feedback = Feedback.objects.get(pk=pk)
            feedback.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Feedback.DoesNotExist:
            return Response({"error": "Feedback not found"}, status=status.HTTP_404_NOT_FOUND)

    return Response({"error": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)
