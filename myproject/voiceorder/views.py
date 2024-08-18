from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import MenuItem, CartItem
from .utils import clova_speech_recognition

def simple_order(request):
    if request.method == 'POST':
        audio_file = request.FILES.get('audio')  # TemporaryUploadedFile 객체
        if audio_file:
            # 파일 데이터를 읽어서 처리
            audio_data = audio_file.read()

            # clova_speech_recognition 함수에 파일 데이터를 전달
            recognized_text = clova_speech_recognition(audio_data)
            print(f"Recognized Text: {recognized_text}")  # 인식된 텍스트 확인을 위해 로그에 출력

            item_name = extract_item_from_text(recognized_text)
            quantity = extract_quantity_from_text(recognized_text)

            if item_name:
                try:
                    menu_item = MenuItem.objects.get(name=item_name)
                    CartItem.objects.create(menu_item=menu_item, quantity=quantity)
                    return JsonResponse({'success': True, 'menu_item': item_name, 'quantity': quantity})
                except MenuItem.DoesNotExist:
                    return JsonResponse({'success': False, 'error': '메뉴를 찾을 수 없습니다.'})
            else:
                return JsonResponse({'success': False, 'error': '메뉴를 인식하지 못했습니다.'})
        else:
            return JsonResponse({'success': False, 'error': '음성 파일이 없습니다.'})

    return render(request, 'simple_order.html')

# 메뉴 아이템을 텍스트에서 추출하는 함수
def extract_item_from_text(text):
    menu_items = MenuItem.objects.all()
    for item in menu_items:
        if item.name in text:
            return item.name
    return None

# 수량을 텍스트에서 추출하는 함수
def extract_quantity_from_text(text):
    numbers = {
        '한': 1, '두': 2, '세': 3, '네': 4, '다섯': 5, '여섯': 6, '일곱': 7, '여덟': 8, '아홉': 9, '열': 10,
        '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10
    }

    for word in text.split():
        if word in numbers:
            return numbers[word]
    
    return 1  # 기본값으로 1개를 반환

# 홈 화면
def home(request):
    return render(request, 'home.html')

# 주문 방식 선택 화면
def order_type(request):
    return render(request, 'order_type.html')

# 음성 주문 처리

# 기본 주문 처리
def regular_order(request):
    menu_items = MenuItem.objects.all()
    if request.method == 'POST':
        menu_id = request.POST.get('menu_id')
        quantity = request.POST.get('quantity', 1)
        menu_item = MenuItem.objects.get(id=menu_id)
        CartItem.objects.create(menu_item=menu_item, quantity=quantity)
        return redirect('cart')
    return render(request, 'regular_order.html', {'menu_items': menu_items})

# 장바구니 보기
def view_cart(request):
    cart_items = CartItem.objects.all()
    return render(request, 'cart.html', {'cart_items': cart_items})

# 옵션 선택
def options(request, cart_item_id):
    cart_item = CartItem.objects.get(id=cart_item_id)
    if request.method == 'POST':
        # 옵션 저장
        cart_item.options = request.POST.get('options')
        cart_item.save()
        return redirect('view_cart')
    return render(request, 'options.html', {'cart_item': cart_item})

# 음성 파일 처리
def process_audio(request):
    if request.method == 'POST' and request.FILES.get('audio'):
        audio_file = request.FILES['audio']
        text = clova_speech_recognition(audio_file)

        if text:
            return JsonResponse({'success': True, 'text': text})
        else:
            return JsonResponse({'success': False, 'error': 'Speech recognition failed.'})
    
    return JsonResponse({'success': False, 'error': 'Invalid request.'})
