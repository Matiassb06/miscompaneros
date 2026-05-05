import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompasService } from '../../core/services/compas.service';
import { UNIVERSIDADES_PERU } from '../../shared/data/universidades-peru';
import { CARRERAS_PERU } from '../../shared/data/carreras-peru';
import { CICLOS_PERU } from '../../shared/data/ciclos-peru'

@Component({
  selector: 'app-add-compa',
  templateUrl: './add-compa.component.html',
  styleUrls: ['./add-compa.component.scss']
})
export class AddCompaComponent implements OnInit {
  public router: Router;
  readonly universidades = UNIVERSIDADES_PERU;
  readonly carreras = CARRERAS_PERU;
  readonly ciclos = CICLOS_PERU;

  // Nuevas variables para el autocompletado
  filteredUniversidades: string[] = [];
  showDropdown = false;
  filteredCarreras: string[] = [];
  showDropdownCarrera = false;

  form = this.fb.group({
    nombre:      ['', [Validators.required, Validators.maxLength(80)]],
    apellido:    ['', [Validators.required, Validators.maxLength(80)]],
    universidad: ['', Validators.maxLength(150)],
    carrera:     ['', Validators.maxLength(150)],
    ciclo:       ['', Validators.maxLength(50)],
    descripcion: ['', Validators.maxLength(300)]
  });

  submitting = false;
  error      = '';

  constructor(private fb: FormBuilder, private compasService: CompasService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    // Escuchar los cambios en el input para filtrar la lista en tiempo real
    this.form.controls['universidad'].valueChanges.subscribe(value => {
      this.filtrarUniversidades(value || '');
    });

    this.form.controls['carrera'].valueChanges.subscribe(value => {
      this.filtrarCarreras(value || '');
    });
  }

  //Normalizacion de texto para el autocompletado
  normalizarTexto(texto: string): string {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Elimina el acento
  }

  // Lógica de filtrado
  filtrarUniversidades(value: string): void {
    const filtro = value.toLowerCase().trim();
    if (!filtro) {
      this.filteredUniversidades = [];
      this.showDropdown = false;
      return;
    }

    this.filteredUniversidades = this.universidades.filter(u =>
        this.normalizarTexto(u).includes(filtro)
    );
    this.showDropdown = this.filteredUniversidades.length > 0;
  }

  filtrarCarreras(value: string): void {
    const filtro = value.toLowerCase().trim();
    if (!filtro) {
      this.filteredCarreras = [];
      this.showDropdownCarrera = false;
      return;
    }

    this.filteredCarreras = this.carreras.filter(c =>
        this.normalizarTexto(c).includes(filtro)
    );
    this.showDropdownCarrera = this.filteredCarreras.length > 0;
  }

  seleccionarUniversidad(univ: string): void {
    this.form.patchValue({ universidad: univ });
    this.showDropdown = false;
  }

  ocultarDropdown(): void {
    this.showDropdown = false;
  }

  seleccionarCarrera(carrera: string): void {
    this.form.patchValue({ carrera: carrera });
    this.showDropdownCarrera = false;
  }

  ocultarDropdownCarrera(): void {
    this.showDropdownCarrera = false;
  }

  submit(): void {
    if (this.form.invalid || this.submitting) return;
    this.submitting = true;
    this.error      = '';
    const v = this.form.value;
    this.compasService.create({
      nombre:      v.nombre!,
      apellido:    v.apellido!,
      universidad: v.universidad || undefined,
      carrera:     v.carrera     || undefined,
      ciclo:       v.ciclo       || undefined,
      descripcion: v.descripcion || undefined
    }).subscribe({
      next: (res: any) => this.router.navigate(['/compa', res.id]),
      error: (err: any) => {
        this.error      = err.error?.error ?? 'Error al agregar. Intenta de nuevo.';
        this.submitting = false;
      }
    });
  }
}