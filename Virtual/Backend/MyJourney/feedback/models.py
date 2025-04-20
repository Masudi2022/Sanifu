from django.db import models



class Feedback(models.Model):
    email = models.EmailField(blank=True)
    message = models.TextField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)], blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} - {self.submitted_at}"

