import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompasService } from '../../core/services/compas.service';
import { ResenasService } from '../../core/services/resenas.service';
import { Compa } from '../../shared/models/compa.model';
import { Resena } from '../../shared/models/resena.model';

@Component({
  selector: 'app-compa-profile',
  templateUrl: './compa-profile.component.html',
  styleUrls: ['./compa-profile.component.scss']
})
export class CompaProfileComponent implements OnInit {
  compa: Compa | null = null;
  resenas: Resena[]   = [];
  loading  = true;
  error    = '';
  showForm = false;

  constructor(
    private route: ActivatedRoute,
    private compasService: CompasService,
    private resenasService: ResenasService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCompa(id);
    this.loadResenas(id);
  }

  loadCompa(id: number): void {
    this.compasService.getById(id).subscribe({
      next:  c  => { this.compa   = c; this.loading = false; },
      error: () => { this.error   = 'No se pudo cargar el perfil.'; this.loading = false; }
    });
  }

  loadResenas(id: number): void {
    this.resenasService.getByCompa(id).subscribe({
      next:  r  => this.resenas = r,
      error: () => {}
    });
  }

  onResenaCreada(): void {
    this.showForm = false;
    if (this.compa) {
      this.loadCompa(this.compa.id);
      this.loadResenas(this.compa.id);
    }
  }
}
