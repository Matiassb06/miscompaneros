const db = require('../config/db');

const searchCompas = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q || q.trim().length < 2)
      return res.status(400).json({ error: 'Escribe al menos 2 caracteres para buscar' });

    const term = `%${q.trim()}%`;
    const result = await db.query(
      `SELECT c.id, c.nombre, c.apellido, c.ciclo, c.universidad, c.carrera, c.foto_url,
              ROUND(AVG(cal.puntuacion)::numeric, 1) AS promedio,
              COUNT(cal.id)::int                     AS total_calificaciones
         FROM compas c
         LEFT JOIN calificaciones cal ON c.id = cal.compa_id
        WHERE unaccent(c.nombre)   ILIKE unaccent($1)
           OR unaccent(c.apellido) ILIKE unaccent($2)
        GROUP BY c.id
        ORDER BY total_calificaciones DESC, c.apellido
        LIMIT 20`,
      [term, term]
    );
    res.json(result.rows);
  } catch (err) { next(err); }
};

const getUniversidades = async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT universidad, COUNT(*)::int AS total_compas
         FROM compas
        WHERE universidad IS NOT NULL AND universidad <> ''
        GROUP BY universidad
        ORDER BY universidad`
    );
    res.json(result.rows);
  } catch (err) { next(err); }
};

const getByUniversidad = async (req, res, next) => {
  try {
    const { nombre } = req.params;
    const result = await db.query(
      `SELECT c.id, c.nombre, c.apellido, c.ciclo, c.universidad, c.carrera, c.foto_url,
              ROUND(AVG(cal.puntuacion)::numeric, 1) AS promedio,
              COUNT(cal.id)::int                     AS total_calificaciones
         FROM compas c
         LEFT JOIN calificaciones cal ON c.id = cal.compa_id
        WHERE c.universidad = $1
        GROUP BY c.id
        ORDER BY c.apellido, c.nombre`,
      [nombre]
    );
    res.json(result.rows);
  } catch (err) { next(err); }
};

const getCompaById = async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT c.id, c.nombre, c.apellido, c.descripcion, c.ciclo, c.universidad, c.carrera,
              c.foto_url, c.created_at,
              ROUND(AVG(cal.puntuacion)::numeric, 1) AS promedio,
              COUNT(cal.id)::int                     AS total_calificaciones
         FROM compas c
         LEFT JOIN calificaciones cal ON c.id = cal.compa_id
        WHERE c.id = $1
        GROUP BY c.id`,
      [req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Compa no encontrado' });
    res.json(result.rows[0]);
  } catch (err) { next(err); }
};

const createCompa = async (req, res, next) => {
  try {
    const { nombre, apellido, ciclo, universidad, carrera, descripcion } = req.body;
    if (!nombre?.trim() || !apellido?.trim())
      return res.status(400).json({ error: 'Nombre y apellido son obligatorios' });

    const result = await db.query(
      `INSERT INTO compas (nombre, apellido, ciclo, universidad, carrera, descripcion)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [
        nombre.trim(), apellido.trim(),
        ciclo?.trim() || null,
        universidad?.trim() || null,
        carrera?.trim() || null,
        descripcion?.trim() || null
      ]
    );
    res.status(201).json({ id: result.rows[0].id, message: 'Compañero agregado exitosamente' });
  } catch (err) { next(err); }
};

module.exports = { searchCompas, getUniversidades, getByUniversidad, getCompaById, createCompa };
