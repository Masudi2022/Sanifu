from django.db import models

# Create your models here.
class Project(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    link = models.URLField(blank=True)
    technologies = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

