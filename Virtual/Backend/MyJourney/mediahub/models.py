from django.db import models

class MediaFile(models.Model):
    MEDIA_TYPES = [
        ('image', 'Image'),
        ('video', 'Video'),
        ('document', 'Document'),
    ]

    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='media/')
    media_type = models.CharField(max_length=10, choices=MEDIA_TYPES)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.media_type})"
    