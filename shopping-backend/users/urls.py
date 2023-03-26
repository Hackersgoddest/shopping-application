from . import views
from django.urls import path
from knox import views as knox_views

urlpatterns = [
     path('login/', views.LoginView.as_view(), name='knox_login'),
     path('user/', views.get_user_data, name='user'),
     path('register/', views.register_api, name='register'),
     path('logout/', knox_views.LogoutView.as_view(), name='logout'),
     path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutAll'),
]
