#!/bin/bash
# Script para actualizar URL del backend en .env.production

# CAMBIA ESTO con tu URL real del backend en Render
BACKEND_URL="https://tu-backend-en-render.onrender.com"

# Actualizar frontend/.env.production
echo "REACT_APP_API_URL=$BACKEND_URL" > frontend/.env.production
echo "SKIP_PREFLIGHT_CHECK=true" >> frontend/.env.production

# Actualizar backend/.env
echo "FRONTEND_URL=https://insomaq-desplegado-frontend.onrender.com" >> backend/.env
echo "CORS_ENABLED=true" >> backend/.env

echo "✅ URLs actualizadas correctamente"
echo "Frontend API URL: $BACKEND_URL"
