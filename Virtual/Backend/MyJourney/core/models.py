from django.db import models

class Profile(models.Model):
    full_name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=150)
    bio = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    x = models.URLField(blank=True, null=True, verbose_name="Twitter (X)")
    cv = models.FileField(upload_to='cv/', blank=True, null=True)

    def __str__(self):
        return self.full_name


class ContactMessage(models.Model):
    sender = models.ForeignKey(Profile, on_delete=models.CASCADE)
    subject = models.CharField(max_length=150)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Feedback Message"
        verbose_name_plural = "Feedback Messages"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"
