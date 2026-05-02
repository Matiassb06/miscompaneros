import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compa, Universidad } from '../../shared/models/compa.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CompasService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  search(q: string): Observable<Compa[]> {
    return this.http.get<Compa[]>(`${this.api}/compas/search`, { params: { q } });
  }

  getById(id: number): Observable<Compa> {
    return this.http.get<Compa>(`${this.api}/compas/${id}`);
  }

  getUniversidades(): Observable<Universidad[]> {
    return this.http.get<Universidad[]>(`${this.api}/compas/universidades`);
  }

  getByUniversidad(nombre: string): Observable<Compa[]> {
    return this.http.get<Compa[]>(`${this.api}/compas/universidad/${encodeURIComponent(nombre)}`);
  }

  create(data: { nombre: string; apellido: string; ciclo?: string; universidad?: string; carrera?: string; descripcion?: string }): Observable<any> {
    return this.http.post(`${this.api}/compas`, data);
  }
}
