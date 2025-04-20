from django.db import models

# Create your models here.
class Blog(models.Model):
    author = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    cover_image = models.ImageField(upload_to='blog_covers/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

