from django.db import models

# Create your models here.
class Profile(models.Model):
    full_name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=150)
    bio = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=100, blank=True)
    profile_image = models.ImageField(upload_to='profile/', null=True, blank=True)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    x = models.URLField(blank=True)
    cv = models.FileField(upload_to='cv/', null=True, blank=True)

    def __str__(self):
        return self.full_name

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=150)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"
