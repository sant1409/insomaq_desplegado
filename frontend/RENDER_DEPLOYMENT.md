# Configuración de despliegue en Render para frontend React

El frontend está configurado con **Create React App (CRA)**, no Vite.

## Instrucciones para Render

### Build Settings (en dashboard de Render):

**Build Command:**
```
npm run build
```

**Start Command:**
```
npm install -g serve && serve -s build -l 3000
```

**Publish directory:**
```
build
```

### Environment Variables (en dashboard de Render):

```
REACT_APP_API_URL=https://tu-backend-en-render.onrender.com
SKIP_PREFLIGHT_CHECK=true
```

Reemplaza `https://tu-backend-en-render.onrender.com` con la URL real de tu backend en Render.

## Archivos locales

- `.env` - para desarrollo (localhost:4000)
- `.env.production` - para producción (Render)

## Verificación

1. CRA genera carpeta `build` al ejecutar `npm run build`
2. `serve -s build` sirve la app estática desde la carpeta `build`
3. Las variables `REACT_APP_*` se cargan en tiempo de compilación (build time)

**Importante:** Después de cambiar las variables de entorno en Render, redeploy para que surtan efecto.
