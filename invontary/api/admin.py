from django.contrib import admin
from .models import ItemMaster,GoodsIn,GoodsOut
# Register your models here.
admin.register(ItemMaster)
admin.register(GoodsIn)
admin.register(GoodsOut)