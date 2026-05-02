-- Hacer usuario_id opcional para reseñas anónimas
ALTER TABLE calificaciones ALTER COLUMN usuario_id DROP NOT NULL;

-- Eliminar restricción única por usuario (ya que ahora es anónimo)
ALTER TABLE calificaciones DROP CONSTRAINT IF EXISTS calificaciones_compa_id_usuario_id_key;
ALTER TABLE calificaciones DROP CONSTRAINT IF EXISTS calificaciones_usuario_id_compa_id_key;
ALTER TABLE calificaciones DROP CONSTRAINT IF EXISTS uq_calificacion_usuario_compa;
