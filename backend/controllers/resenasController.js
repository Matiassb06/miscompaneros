const db = require('../config/db');

const getResenasByCompa = async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT id, puntuacion, comentario, created_at
         FROM calificaciones
        WHERE compa_id = $1
        ORDER BY created_at DESC`,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) { next(err); }
};

const createResena = async (req, res, next) => {
  try {
    const compa_id = req.params.id;
    const { puntuacion, comentario } = req.body;

    if (!puntuacion || puntuacion < 1 || puntuacion > 5) {
      return res.status(400).json({ error: 'La puntuación debe estar entre 1 y 5' });
    }

    const result = await db.query(
      `INSERT INTO calificaciones (compa_id, puntuacion, comentario)
       VALUES ($1, $2, $3) RETURNING id`,
      [compa_id, puntuacion, comentario?.trim() || null]
    );
    res.status(201).json({ id: result.rows[0].id, message: 'Reseña publicada exitosamente' });
  } catch (err) { next(err); }
};

module.exports = { getResenasByCompa, createResena };
