-- Ejecutar en el SQL Editor de Supabase

CREATE TABLE IF NOT EXISTS usuarios (
  id          SERIAL PRIMARY KEY,
  nombre      VARCHAR(100)  NOT NULL,
  email       VARCHAR(150)  NOT NULL UNIQUE,
  password    VARCHAR(255)  NOT NULL,
  created_at  TIMESTAMP     DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS compas (
  id          SERIAL PRIMARY KEY,
  nombre      VARCHAR(100)  NOT NULL,
  apellido    VARCHAR(100)  NOT NULL,
  descripcion TEXT,
  foto_url    VARCHAR(255),
  created_at  TIMESTAMP     DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS calificaciones (
  id          SERIAL PRIMARY KEY,
  compa_id    INT        NOT NULL REFERENCES compas(id)    ON DELETE CASCADE,
  usuario_id  INT        NOT NULL REFERENCES usuarios(id)  ON DELETE CASCADE,
  puntuacion  SMALLINT   NOT NULL CHECK (puntuacion BETWEEN 1 AND 5),
  comentario  TEXT,
  created_at  TIMESTAMP  DEFAULT NOW(),
  UNIQUE (compa_id, usuario_id)
);

-- Datos de ejemplo
INSERT INTO compas (nombre, apellido, descripcion) VALUES
  ('Carlos',  'García',    'Siempre dispuesto a ayudar en los proyectos de equipo.'),
  ('María',   'López',     'Muy responsable y puntual con las entregas.'),
  ('Juan',    'Martínez',  'Gran líder de grupo, muy organizado.'),
  ('Sofía',   'Hernández', 'Creativa y con muchas ideas innovadoras.'),
  ('Diego',   'Ramírez',   'Excelente compañero de trabajo, muy colaborativo.');
