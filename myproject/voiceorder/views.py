from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import MenuItem, CartItem
from .utils import clova_speech_recognition
from django.shortcuts import render



def get_menu_items(request, subcategory):
    menu_items = MenuItem.objects.filter(subcategory=subcategory)
    data = []
    for item in menu_items:
        data.append({
            'name': item.name,
            'price': item.price,
            'img': item.img,  # 이미지 경로는 템플릿에서 처리
        })
    return JsonResponse({'menu_items': data})





def options(request, cart_item_id):
    # 특정 CartItem을 ID로 가져옴
    cart_item = CartItem.objects.get(id=cart_item_id)
    
    if request.method == 'POST':
        # POST 요청으로부터 옵션 값을 가져와서 저장
        cart_item.options = request.POST.get('options')
        cart_item.save()
        # 옵션을 저장한 후 장바구니 페이지로 리다이렉트
        return redirect('cart')

    # GET 요청일 경우, 옵션 선택 페이지를 렌더링
    return render(request, 'options.html', {'cart_item': cart_item})

def view_cart(request):
    # 장바구니에 있는 모든 아이템을 가져옴
    cart_items = CartItem.objects.all()
    # cart.html 템플릿을 렌더링하고 cart_items를 전달함
    return render(request, 'cart.html', {'cart_items': cart_items})

def regular_order(request):
    menu_items = MenuItem.objects.all()  # 메뉴 아이템을 불러옴
    if request.method == 'POST':
        menu_id = request.POST.get('menu_id')  # 사용자가 선택한 메뉴 아이템 ID
        quantity = request.POST.get('quantity', 1)  # 사용자가 선택한 수량, 기본값 1
        menu_item = MenuItem.objects.get(id=menu_id)  # 메뉴 아이템을 데이터베이스에서 가져옴
        CartItem.objects.create(menu_item=menu_item, quantity=quantity)  # 장바구니에 추가
        return redirect('cart')  # 장바구니 페이지로 리디렉션
    return render(request, 'regular_order.html', {'menu_items': menu_items})  # regular_order 템플릿으로 렌더링

def order_type(request):
    return render(request, 'order_type.html')

def home(request):
    return render(request, 'home.html')

def simple_order(request):
    if request.method == 'POST':
        audio_file = request.FILES.get('audio')  # TemporaryUploadedFile 객체
        if audio_file:
            # 파일 데이터를 읽어서 처리
            audio_data = audio_file.read()

            # clova_speech_recognition 함수에 파일 데이터를 전달
            recognized_text = clova_speech_recognition(audio_data)
            print(f"Recognized Text: {recognized_text}")  # 인식된 텍스트 확인을 위해 로그에 출력

            # 텍스트 전처리
            recognized_text = preprocess_text(recognized_text)

            # 메뉴명과 수량 추출
            item_name = extract_item_from_text(recognized_text)
            quantity = extract_quantity_from_text(recognized_text)

            if item_name:
                return JsonResponse({'success': True, 'item_name': item_name, 'quantity': quantity})
            else:
                return JsonResponse({'success': False, 'error': '메뉴를 인식하지 못했습니다.'})
        else:
            return JsonResponse({'success': False, 'error': '음성 파일이 없습니다.'})

    return render(request, 'simple_order.html')

# 텍스트 전처리 함수 (예: "한잔"을 "한 잔"으로 변환)
def preprocess_text(text):
    # 숫자와 "잔" 사이에 띄어쓰기를 추가하는 전처리
    text = text.replace("1", "한 잔")
    text = text.replace("2", "두 잔")
    text = text.replace("3잔", "세 잔")
    text = text.replace("4잔", "네 잔")
    text = text.replace("5잔", "다섯 잔")
    text = text.replace("6잔", "여섯 잔")
    text = text.replace("7잔", "일곱 잔")
    text = text.replace("8잔", "여덟 잔")
    text = text.replace("9잔", "아홉 잔")
    text = text.replace("10잔", "열 잔")
    
    # 한글로 된 숫자에도 동일하게 적용
    text = text.replace("한잔", "한 잔")
    text = text.replace("두잔", "두 잔")
    text = text.replace("세잔", "세 잔")
    text = text.replace("네잔", "네 잔")
    text = text.replace("다섯짠", "다섯 잔")
    text = text.replace("여섯짠", "여섯 잔")
    text = text.replace("일곱짠", "일곱 잔")
    text = text.replace("여덟짠", "여덟 잔")
    text = text.replace("아홉짠", "아홉 잔")
    text = text.replace("열짠", "열 잔")
    
    # 추가적인 전처리 규칙 필요시 여기에 추가
    return text


# 메뉴 아이템을 텍스트에서 추출하는 함수
def extract_item_from_text(text):
    menu_items = MenuItem.objects.all()
    for item in menu_items:
        if item.name.replace(" ", "") in text.replace(" ", ""):
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
    return 1  # 기본값으로 수량 1 반환
