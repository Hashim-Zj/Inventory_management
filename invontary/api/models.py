from django.db import models


# Create your models here.
class ItemMaster(models.Model):
    item_name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    has_expiry = models.BooleanField(default=False)
    has_entry_number = models.BooleanField(default=False)

    def goods_in(self):
        return GoodsIn.objects.filter(item=self)

    def total_stock(self):
        stocks=GoodsIn.objects.filter(item=self)
        return sum(int(stock.quantity) for stock in stocks)

    def goods_out(self):
        return GoodsOut.objects.filter(item=self)

    def __str__(self):
        return self.item_name


class GoodsIn(models.Model):
    item = models.ForeignKey(ItemMaster, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    expiry_date = models.DateField(null=True)
    entry_number = models.PositiveIntegerField(null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item


class GoodsOut(models.Model):
    item = models.ForeignKey(ItemMaster, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    date_removed = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item
