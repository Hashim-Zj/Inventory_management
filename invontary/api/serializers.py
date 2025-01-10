from rest_framework import serializers
from .models import ItemMaster, GoodsIn, GoodsOut


class GoodsInSerializer(serializers.ModelSerializer):
    item = serializers.CharField(read_only=True)

    class Meta:
        model = GoodsIn
        fields = "__all__"

    def create(self, validated_data):
        item = self.context.get("item")
        return GoodsIn.objects.create(item=item, **validated_data)


class GoodsOutSerializer(serializers.ModelSerializer):
    item = serializers.CharField(read_only=True)

    class Meta:
        model = GoodsOut
        fields = "__all__"

    def create(self, validated_data):
        item = self.context.get("item")
        return GoodsOut.objects.create(item=item, **validated_data)


class ItemMasterSerializer(serializers.ModelSerializer):
    goods_in=GoodsInSerializer(many=True,read_only=True)
    total_stock=serializers.IntegerField(read_only=True)
    goods_out=GoodsOutSerializer(many=True,read_only=True)

    class Meta:
        model = ItemMaster
        fields = "__all__"
