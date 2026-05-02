require('dotenv').config();
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const express = require('express');
const cors    = require('cors');

const compasRoutes   = require('./routes/compas.routes');
const resenasRoutes  = require('./routes/resenas.routes');
const usuariosRoutes = require('./routes/usuarios.routes');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/compas',   compasRoutes);
app.use('/api/resenas',  resenasRoutes);
app.use('/api/usuarios', usuariosRoutes);

app.get('/api/health', async (req, res) => {
  const db = require('./config/db');
  try {
    await db.query('SELECT 1');
    res.json({ status: 'ok', db: 'connected', env_db: !!process.env.DATABASE_URL });
  } catch (e) {
    res.status(500).json({ status: 'error', message: e.message, env_db: !!process.env.DATABASE_URL });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
