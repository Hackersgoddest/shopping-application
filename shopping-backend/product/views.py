from rest_framework.response import Response
from .models import Product, ProductCategory
from .serializers import ProductSerializer, ProductCategorySerializer
from rest_framework.decorators import permission_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets


@permission_classes([IsAuthenticated])
class ProductView(viewsets.ModelViewSet):
    def list(self, request):
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


class ProductCategoryView(viewsets.ModelViewSet):
    def list(self, request):
        queryset = ProductCategory.objects.all().order_by('category_id')
        serializer = ProductCategorySerializer(queryset, many=True)

        return Response(serializer.data)
