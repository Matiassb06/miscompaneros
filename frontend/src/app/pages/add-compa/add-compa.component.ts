import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompasService } from '../../core/services/compas.service';

@Component({
  selector: 'app-add-compa',
  templateUrl: './add-compa.component.html',
  styleUrls: ['./add-compa.component.scss']
})
export class AddCompaComponent {
  public router: Router;
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
