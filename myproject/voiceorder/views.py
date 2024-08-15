# voiceorder/views.py

from django.shortcuts import render
from django.http import JsonResponse
from .utils import clova_speech_recognition

def index(request):
    return render(request, 'index.html')

def process_audio(request):
    if request.method == 'POST' and request.FILES['audio']:
        audio_file = request.FILES['audio']
        text = clova_speech_recognition(audio_file.temporary_file_path())

    
        if text:
            return JsonResponse({'success': True, 'text': text})
        else:
            return JsonResponse({'success': False, 'error': 'Speech recognition failed.'})
    
    return JsonResponse({'success': False, 'error': 'Invalid request.'})

