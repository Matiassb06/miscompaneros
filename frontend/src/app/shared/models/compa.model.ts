export interface Compa {
  id: number;
  nombre: string;
  apellido: string;
  descripcion?: string;
  ciclo?: string;
  universidad?: string;
  carrera?: string;
  foto_url?: string;
  promedio: number | null;
  total_calificaciones: number;
}

export interface Universidad {
  universidad: string;
  total_compas: number;
}
