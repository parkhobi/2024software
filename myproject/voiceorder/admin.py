from django.contrib import admin

# Register your models here.
# voiceorder/admin.py

from django.contrib import admin
from .models import MenuItem

admin.site.register(MenuItem)
