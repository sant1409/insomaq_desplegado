# 🔴 ERROR DE CORS - GUÍA DE SOLUCIÓN RÁPIDA

## El Problema Exacto
```
❌ https://tu-backend-url.onrender.com/usuarios/iniciar-sesion
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ESTO ES UN PLACEHOLDER - NO REEMPLAZADO
```

---

## ✅ SOLUCIÓN INMEDIATA

### 1️⃣ ENCUENTRA tu URL del backend
- Dashboard Render → Tu servicio backend
- La URL será algo como: `https://insomaq-backend-abc123.onrender.com`

### 2️⃣ REEMPLAZA en `frontend/.env.production`
**ANTES:**
```dotenv
REACT_APP_API_URL=https://tu-backend-url.onrender.com
```

**DESPUÉS** (con TU URL real):
```dotenv
REACT_APP_API_URL=https://insomaq-backend-abc123.onrender.com
```

### 3️⃣ AGREGA a `backend/.env`
```dotenv
FRONTEND_URL=https://insomaq-desplegado-frontend.onrender.com
CORS_ENABLED=true
```

### 4️⃣ PUSHEA Y REDEPLOYA
```bash
# Backend
cd backend
git add .env app.js
git commit -m "Arreglar CORS"
git push

# Frontend  
cd ../frontend
git add .env.production
git commit -m "Actualizar URL backend en production"
git push
```

### 5️⃣ REDEPLOY EN RENDER
- Dashboard Render
- Cada servicio → "Redeploy latest commit"
- Espera 5-10 min

### 6️⃣ LIMPIA CACHÉ
- Abre app en Render
- F12 → Consola
- Ejecuta: `location.reload(true)` o Ctrl+Shift+R

---

## 📋 CHECKLIST
- [ ] URL backend encontrada en Render
- [ ] `.env.production` actualizado (NO el placeholder)
- [ ] `.env` backend tiene `FRONTEND_URL` y `CORS_ENABLED`
- [ ] `git push` en backend
- [ ] `git push` en frontend
- [ ] Redeploy en Render (ambos)
- [ ] Caché limpiado

---

## 🧪 VERIFICACIÓN
Abre consola del navegador (F12) y ejecuta:
```javascript
fetch('https://tu-url-real/usuarios/public')
  .then(r => r.json())
  .then(d => console.log('✅ CORS OK:', d))
  .catch(e => console.error('❌ CORS Error:', e))
```

---

## 📞 Información que Necesito
**¿Cuál es la URL de tu backend en Render?**
Ejemplo: `https://insomaq-backend-12345.onrender.com`

Dime y puedo hacer el cambio exacto por ti.
