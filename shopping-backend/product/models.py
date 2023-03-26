from django.db import models


# Create your models here.
class ProductCategory(models.Model):
    category_name = models.CharField(max_length=30, null=False)
    category_id = models.PositiveIntegerField(null=False)

    def __str__(self):
        return self.category_name


class Product(models.Model):
    category = models.ForeignKey('ProductCategory', on_delete=models.CASCADE, related_name='ProductCategory',
                                 null=False)
    product_id = models.PositiveIntegerField(null=False)
    product_name = models.CharField(max_length=50, null=False)
    product_cost = models.DecimalField(decimal_places=2, max_digits=6, null=False)
    date_added = models.DateField(null=False)
    product_image = models.CharField(max_length=500, null=False)

    def __str__(self):
        return self.product_name
