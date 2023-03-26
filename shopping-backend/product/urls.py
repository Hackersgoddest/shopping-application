from .views import ProductView, ProductCategoryView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', ProductCategoryView, basename='product')
router.register('category', ProductView, basename='products')

urlpatterns = router.urls

