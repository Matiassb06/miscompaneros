require('dotenv').config();
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

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
