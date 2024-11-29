from django.db import models

class RacePost(models.Model):
    title = models.CharField(max_length=200)
    distance = models.DecimalField(max_digits=5, decimal_places=2, help_text="Distance in km")
    elevation = models.DecimalField(max_digits=5, decimal_places=2, help_text="Elevation Gain in Meters")
    date_posted = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True)
    

    def __str__(self):
        return self.title