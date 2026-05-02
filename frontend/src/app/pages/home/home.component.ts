import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { CompasService } from '../../core/services/compas.service';
import { Compa, Universidad } from '../../shared/models/compa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab: 'universidades' | 'compas' = 'universidades';

  // Tab universidades
  universidades: Universidad[] = [];
  loadingUnivs = false;
  selectedUniv: string | null = null;
  compasByUniv: Compa[] = [];
  loadingByUniv = false;

  // Tab compas
  searchCtrl = new FormControl('');
  results: Compa[] = [];
  loading = false;
  searched = false;
  error = '';

  constructor(private compasService: CompasService, private router: Router) {}

  ngOnInit(): void {
    this.loadUniversidades();

    this.searchCtrl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((q: any) => {
        if (!q || q.trim().length < 2) {
          this.results  = [];
          this.searched = false;
          this.loading  = false;
          return EMPTY;
        }
        this.loading = true;
        this.error   = '';
        return this.compasService.search(q.trim()).pipe(
          catchError(() => {
            this.error   = 'Error al buscar. Intenta de nuevo.';
            this.loading = false;
            return of([] as Compa[]);
          })
        );
      })
    ).subscribe((data: Compa[]) => {
      this.results  = data;
      this.searched = true;
      this.loading  = false;
    });
  }

  loadUniversidades(): void {
    this.loadingUnivs = true;
    this.compasService.getUniversidades().subscribe({
      next:  u  => { this.universidades = u; this.loadingUnivs = false; },
      error: () => { this.loadingUnivs = false; }
    });
  }

  setTab(tab: 'universidades' | 'compas'): void {
    this.activeTab    = tab;
    this.selectedUniv = null;
    this.searched     = false;
    this.searchCtrl.setValue('', { emitEvent: false });
    this.results      = [];
  }

  selectUniversidad(nombre: string): void {
    this.selectedUniv   = nombre;
    this.loadingByUniv  = true;
    this.compasByUniv   = [];
    this.compasService.getByUniversidad(nombre).subscribe({
      next:  c  => { this.compasByUniv = c; this.loadingByUniv = false; },
      error: () => { this.loadingByUniv = false; }
    });
  }

  backToUnivs(): void {
    this.selectedUniv = null;
    this.compasByUniv = [];
  }

  go(id: number): void {
    this.router.navigate(['/compa', id]);
  }

  initials(u: string): string {
    return u.split(' ').filter(w => w.length > 3).slice(0, 2).map(w => w[0].toUpperCase()).join('') || u[0].toUpperCase();
  }
}
