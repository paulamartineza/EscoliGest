import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;  // Formulario reactivo para el login

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    // Crear el formulario de login con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Validación de email
      password: ['', [Validators.required, Validators.minLength(6)]]  // Validación de contraseña
    });
  }

  // Simulación de login
  async onLogin() {
    if (this.loginForm.valid) {
      // Aquí deberías conectar con tu backend real
      alert('Funcionalidad de login no implementada.');
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }
}
