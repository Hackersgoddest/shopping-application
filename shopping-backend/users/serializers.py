from .models import NewUser
from rest_framework import serializers, validators


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ("username", "password", "email", "first_name", "last_name")

        extra_kwargs = {
            "password": {"write_only": True},
            "username": {
                "required": True,
                "allow_blank": False,
                "validators": [
                    validators.UniqueValidator(
                        NewUser.objects.all(), "A user with that username already exists"
                    )
                ]
            }
        }

    def create(self, validated_data):
        user = NewUser(
            username=validated_data["username"],
            password=validated_data["password"],
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"]
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
