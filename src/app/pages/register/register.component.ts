import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    // Configura el formulario
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  async onRegister() {
    if (this.registrationForm.invalid) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }
    // Aquí deberías conectar con tu backend real
    alert('Funcionalidad de registro no implementada.');
  }
}
