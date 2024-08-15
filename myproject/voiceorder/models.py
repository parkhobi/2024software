from django.db import models

# Create your models here.
# voiceorder/models.py

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    subcategory = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.CharField(max_length=100)

    def __str__(self):
        return self.name
