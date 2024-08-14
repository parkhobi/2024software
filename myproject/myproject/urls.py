# myproject/urls.py

from django.contrib import admin
from django.urls import path
from voiceorder import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('process_audio/', views.process_audio, name='process_audio'),
]
