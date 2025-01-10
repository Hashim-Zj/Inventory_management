from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.decorators import action
from rest_framework.response import Response


# Create your views here.


class ItemMasterView(viewsets.ModelViewSet):
    queryset = ItemMaster.objects.all()
    serializer_class = ItemMasterSerializer

    @action(methods=["POST"], detail=True)
    def add_GoodsIn(self, request, *args, **kwargs):
        item_id = kwargs.get("pk")
        item = ItemMaster.objects.get(id=item_id)

        expiry_date = request.data.get("expiry_date")
        entry_number = request.data.get("entry_number")

        if expiry_date:
            item.has_expiry = True
        if entry_number:
            item.has_entry_number = True
        item.save()

        serializer = GoodsInSerializer(data=request.data, context={"item": item})
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)

    @action(methods=["POST"], detail=True)
    def add_GoodsOut(self, request, *args, **kwargs):
        item_id = kwargs.get("pk")
        item = ItemMaster.objects.get(id=item_id)
        quantity_out = int(request.data.get("quantity", 0))

        items_in = GoodsIn.objects.filter(item=item, quantity__gt=0).order_by(
            "expiry_date"
        )

        total_stock = sum(i.quantity for i in items_in)

        if quantity_out > total_stock:
            return Response({"error": "Insufficient stock"}, status=400)

        remaining_quantity = quantity_out

        for goods_in in items_in:
            if remaining_quantity <= 0:
                break
            if goods_in.quantity >= remaining_quantity:
                goods_in.quantity -= remaining_quantity
                goods_in.save()
                remaining_quantity = 0
            else:
                remaining_quantity -= goods_in.quantity
                goods_in.quantity = 0
                goods_in.save()

        serializer = GoodsOutSerializer(data=request.data, context={"item": item})
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)


class GoodsInView(viewsets.ModelViewSet):
    queryset = GoodsIn.objects.all()
    serializer_class = GoodsInSerializer


class GoodsOutView(viewsets.ModelViewSet):
    queryset = GoodsOut.objects.all()
    serializer_class = GoodsOutSerializer
