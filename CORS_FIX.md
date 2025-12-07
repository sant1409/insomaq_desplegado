# ⚠️ SOLUCIÓN PARA ERROR DE CORS EN RENDER

## El Problema
```
Access to fetch at 'https://tu-backend-url.onrender.com/usuarios/iniciar-sesion' 
has been blocked by CORS policy
```

**Causa:** El placeholder `https://tu-backend-url.onrender.com` NO fue reemplazado por la URL real de tu backend.

---

## ✅ Solución en 3 pasos

### PASO 1: Obtener URL del Backend en Render
1. Ve a [Render Dashboard](https://dashboard.render.com)
2. Busca tu servicio backend (algo como `insomaq-backend`)
3. Copia la URL completa (p. ej. `https://insomaq-backend-xyz123.onrender.com`)

### PASO 2: Actualizar `.env.production` en Frontend
En `frontend/.env.production`, reemplaza:
```dotenv
REACT_APP_API_URL=https://tu-backend-url.onrender.com
```

Con tu URL real:
```dotenv
REACT_APP_API_URL=https://insomaq-backend-xyz123.onrender.com
```

### PASO 3: Actualizar `.env` en Backend
En `backend/.env`, asegúrate que tenga:
```dotenv
FRONTEND_URL=https://insomaq-desplegado-frontend.onrender.com
CORS_ENABLED=true
```

---

## 🔧 Backend CORS Configuration
El backend ahora tiene CORS mejorado en `app.js`:
- Permite requests desde: `http://localhost:3000`, `http://localhost:4000`
- Y desde la URL del frontend en Render (si está en `.env`)

---

## 📝 Checklist Final
- [ ] URL del backend reemplazada en `frontend/.env.production`
- [ ] `backend/.env` tiene `FRONTEND_URL` correcto
- [ ] `git push` en ambas carpetas (backend y frontend)
- [ ] Redeploy en Render de ambos servicios
- [ ] Limpiar caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- [ ] Reintentar login

---

## 🆘 Si persiste el error

Ejecuta en la consola del navegador (F12 > Console):
```javascript
console.log('API URL:', process.env.REACT_APP_API_URL);
```

Debe mostrar tu URL real, NO el placeholder.

Si sigue mostrando el placeholder, fuerza rebuild en Render:
1. Ve a tu servicio frontend en Render
2. Haz clic en "Redeploy"
3. Espera a que termine (5-10 minutos)
