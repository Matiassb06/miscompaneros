import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  loading = false;
  error   = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  submit(): void {
    if (this.form.invalid || this.loading) return;
    this.loading = true;
    this.error   = '';

    this.auth.login(this.form.value as any).subscribe({
      next:  () => this.router.navigate(['/']),
      error: (err) => {
        this.error   = err.error?.error ?? 'Error al iniciar sesión.';
        this.loading = false;
      }
    });
  }
}
