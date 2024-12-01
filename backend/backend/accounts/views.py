# accounts/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .models import CustomUser


class CreateUserView(APIView):
    def post(self, request):
        # Récupérer les données du formulaire envoyées
        username = request.data.get('username')
        email = request.data.get('email')

        # Vérifier si l'utilisateur existe déjà
        if CustomUser.objects.filter(username=username).exists():
            return Response({"detail": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        if CustomUser.objects.filter(email=email).exists():
            return Response({"detail": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

        # Si l'utilisateur n'existe pas, on continue avec la création
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():  # Si les données sont valides
            serializer.save()
            return Response({"detail": "User created successfully"}, status=status.HTTP_201_CREATED)

        # Si les données sont invalides, on renvoie les erreurs
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)