from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from .models import Product, ProductCategory
from .serializers import ProductSerializer, ProductCategorySerializer
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, generics


class ProductsPageView(PageNumberPagination):
    page_size = 8
    page_size_query_param = 'page_size'
    max_page_size = 8


# @permission_classes([IsAuthenticated])
class ProductView(generics.ListAPIView):
    serializer_class = ProductSerializer
    pagination_class = ProductsPageView

    def get_queryset(self):
        path_id = self.kwargs['id']
        return Product.objects.filter(category__id=path_id)


class ProductCategoryView(generics.ListAPIView):
    queryset = ProductCategory.objects.all().order_by('category_id')
    serializer_class = ProductCategorySerializer
