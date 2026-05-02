import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resena } from '../../shared/models/resena.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ResenasService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getByCompa(compaId: number): Observable<Resena[]> {
    return this.http.get<Resena[]>(`${this.api}/resenas/compa/${compaId}`);
  }

  create(compaId: number, data: { puntuacion: number; comentario: string }): Observable<any> {
    return this.http.post(`${this.api}/resenas/compa/${compaId}`, data);
  }
}
