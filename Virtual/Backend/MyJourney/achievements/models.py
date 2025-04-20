from django.db import models

# Create your models here.
class Achievement(models.Model):
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    certificate = models.FileField(upload_to='certificates/', blank=True, null=True)

