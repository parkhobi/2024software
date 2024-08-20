from django.db import models



class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    subcategory = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.CharField(max_length=100)  # 이미지 경로만 저장하는 필드


class CartItem(models.Model):
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    options = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f'{self.quantity} x {self.menu_item.name}'
