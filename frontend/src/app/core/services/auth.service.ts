import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = `${environment.apiUrl}/usuarios`;
  private subject = new BehaviorSubject<Usuario | null>(null);

  currentUser$ = this.subject.asObservable();

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem('usuario');
    if (stored) this.subject.next(JSON.parse(stored));
  }

  register(data: { nombre: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.api}/register`, data);
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string; usuario: Usuario }>(`${this.api}/login`, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        this.subject.next(res.usuario);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.subject.next(null);
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  get currentUser(): Usuario | null {
    return this.subject.value;
  }
}
