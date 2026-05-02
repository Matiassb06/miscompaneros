import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    nombre:   ['', [Validators.required, Validators.minLength(2)]],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  loading = false;
  error   = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  submit(): void {
    if (this.form.invalid || this.loading) return;
    this.loading = true;
    this.error   = '';

    this.auth.register(this.form.value as any).subscribe({
      next:  () => this.router.navigate(['/login']),
      error: (err) => {
        this.error   = err.error?.error ?? 'Error al registrarse.';
        this.loading = false;
      }
    });
  }
}
