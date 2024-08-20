# myproject/urls.py

from django.urls import path
from voiceorder import views  # voiceorder 앱에서 views 가져오기
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('order_type/', views.order_type, name='order_type'),
    path('simple_order/', views.simple_order, name='simple_order'),
    path('regular_order/', views.regular_order, name='regular_order'),
    path('cart/', views.view_cart, name='cart'),
    path('options/<int:cart_item_id>/', views.options, name='options'),
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
     path('get_menu_items/<str:subcategory>/', views.get_menu_items, name='get_menu_items'),
     
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
