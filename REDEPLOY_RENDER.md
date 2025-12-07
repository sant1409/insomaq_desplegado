# 🚀 REDEPLOY EN RENDER - INSTRUCCIONES FINALES

## ✅ Lo que ya está hecho
- [x] Backend app.js actualizado con CORS mejorado
- [x] `frontend/.env.production` → `https://insomaq-desplegado-znaa.onrender.com`
- [x] `backend/.env` → `FRONTEND_URL` y `CORS_ENABLED` configurados
- [x] Push a GitHub en ambos repositorios ✅

## 🔧 Próximos pasos EN RENDER

### 1️⃣ Redeploy Backend
1. Ve a [Render Dashboard](https://dashboard.render.com)
2. Busca tu servicio: `insomaq-desplegado-znaa` (backend)
3. Haz clic en el servicio
4. Botón **"Redeploy latest commit"**
5. Espera a que termine (5-10 minutos)
   - Verás "Build in progress..."
   - Luego "Your service is live"

### 2️⃣ Redeploy Frontend
1. En Render Dashboard, busca: `insomaq-desplegado-frontend`
2. Haz clic en el servicio
3. Botón **"Redeploy latest commit"**
4. Espera a que termine

### 3️⃣ Limpiar Caché y Probar
1. Abre tu app: `https://insomaq-desplegado-frontend.onrender.com`
2. Presiona: **Ctrl+Shift+R** (o Cmd+Shift+R en Mac)
3. Intenta hacer login

### 4️⃣ Verificar que funciona
- ✅ Login debería funcionar
- ✅ No debe aparecer el error CORS

---

## 🧪 Si aún persiste el error

Abre **Consola del navegador (F12)** y ejecuta:
```javascript
fetch('https://insomaq-desplegado-znaa.onrender.com/usuarios/public')
  .then(r => r.json())
  .then(d => console.log('✅ Backend OK:', d))
  .catch(e => console.error('❌ Error:', e.message))
```

Debe responder con lista de usuarios (✅ OK) o error específico.

---

## 📋 Resumen de URLs

| Servicio | URL |
|----------|-----|
| **Frontend** | `https://insomaq-desplegado-frontend.onrender.com` |
| **Backend** | `https://insomaq-desplegado-znaa.onrender.com` |
| **Base de datos** | Railway (conectada) |

---

## ✨ Esperado después del redeploy
- ✅ Endpoint `/usuarios/iniciar-sesion` responde correctamente
- ✅ CORS headers presentes en respuestas
- ✅ Login funciona sin errores
- ✅ Datos se cargan correctamente

**¡Listo! Ahora solo redeploya en Render y prueba.**
