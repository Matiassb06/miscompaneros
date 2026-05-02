const db     = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

const register = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Nombre, email y contraseña son requeridos' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
    }
    const hash = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING id',
      [nombre.trim(), email.trim().toLowerCase(), hash]
    );
    res.status(201).json({ id: result.rows[0].id, nombre, email });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'El email ya está registrado' });
    }
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos' });
    }
    const result = await db.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email.trim().toLowerCase()]
    );
    const usuario = result.rows[0];
    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    );
    res.json({
      token,
      usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email }
    });
  } catch (err) { next(err); }
};

module.exports = { register, login };
