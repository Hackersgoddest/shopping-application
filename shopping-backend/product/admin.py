from django.contrib import admin
from .models import Product, ProductCategory


class ProductAdminConfig(admin.ModelAdmin):
    search_fields = ('product_id', 'product_name', 'product_cost', 'date_added', 'category')
    list_filter = ('category',)
    ordering = ('-date_added',)
    list_display = ('product_name', 'product_id', 'product_cost', 'date_added', 'category')
    fieldsets = (
        ("Product", {'fields': ('product_id', 'product_name', 'product_cost', 'category',)}),
        ('Date', {'fields': ('date_added',)}),
        ('Link to image', {'fields': ('product_image',)}),
    )


class ProductCategoryAdminConfig(admin.ModelAdmin):
    list_display = ('category_name', 'category_id')
    ordering = ('category_id',)


admin.site.register(Product, ProductAdminConfig)
admin.site.register(ProductCategory, ProductCategoryAdminConfig)
