from .views import ProductView, ProductCategoryView
from django.urls import path


urlpatterns = [
    path('', ProductCategoryView.as_view()),
    path('category/<int:id>/', ProductView.as_view())
  ]
