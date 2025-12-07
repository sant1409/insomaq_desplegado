const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

// Configurar CORS para permitir solicitudes desde el frontend
const corsOptions = {
  origin: function (origin, callback) {
    // Permitir solicitudes sin origen (mobile, curl, postman, etc)
    if (!origin) return callback(null, true);
    
    // Lista de orígenes permitidos
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:4000',
      process.env.FRONTEND_URL // Variable de entorno para el frontend en producción
    ];
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json());

// Importar modelos
const { sequelize } = require('./models');

// Importar rutas
const laminasRoutes = require('./routes/laminas');
const tipoLaminaRoutes = require('./routes/tipo-laminas');
const maquinasRoutes = require('./routes/maquinas');
const usuariosRoutes = require('./routes/usuarios');
const retazosRoutes = require('./routes/retazos');
const cortesRoutes = require('./routes/cortes');
const alertasRoutes = require('./routes/alertas');

// Rutas
app.use(express.static('public'));
app.use('/laminas', laminasRoutes);
app.use('/tipo-laminas', tipoLaminaRoutes);
app.use('/maquinas', maquinasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/retazos', retazosRoutes);
app.use('/cortes', cortesRoutes);
app.use('/alertas', alertasRoutes);

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});



// Iniciar servidor después de sincronizar BD
sequelize.sync({ alter: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Servidor backend corriendo en http://localhost:${port}`);
      console.log(`Conexión a la base de datos establecida con éxito.`);
    });
  })
  .catch(err => {
    console.error('❌ Error al sincronizar la base de datos:', err);
    process.exit(1);
  });

app.get('/test-db', async (req, res) => {
  try {
    // Esto obtiene el nombre de la base de datos conectada
    const [results] = await sequelize.query('SELECT DATABASE() as db;');
    res.json({
      message: 'Backend corriendo y conectado a la DB correctamente',
      database: results[0].db
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
