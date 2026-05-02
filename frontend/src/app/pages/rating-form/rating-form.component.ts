import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResenasService } from '../../core/services/resenas.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss']
})
export class RatingFormComponent {
  @Input() compaId!: number;
  @Output() resenaCreada = new EventEmitter<void>();

  form = this.fb.group({
    puntuacion: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
    comentario: ['', Validators.maxLength(500)]
  });

  submitting = false;
  error      = '';
  success    = '';

  constructor(private fb: FormBuilder, private resenasService: ResenasService) {}

  setStars(n: number): void {
    this.form.patchValue({ puntuacion: n });
  }

  submit(): void {
    if (this.form.invalid || this.submitting) return;

    this.submitting = true;
    this.error      = '';
    const puntuacion = this.form.get('puntuacion')!.value as number;
    const comentario = this.form.get('comentario')!.value as string;

    this.resenasService.create(this.compaId, {
      puntuacion,
      comentario: comentario || ''
    }).subscribe({
      next: () => {
        this.success = '¡Reseña publicada exitosamente!';
        this.submitting = false;
        setTimeout(() => this.resenaCreada.emit(), 1200);
      },
      error: (err) => {
        this.error      = err.error?.error ?? 'Error al publicar la reseña.';
        this.submitting = false;
      }
    });
  }
}
