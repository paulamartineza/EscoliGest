import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importa AngularFireAuth

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;  // Formulario reactivo para el login

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth  // Inyecta el servicio de Firebase Auth
  ) {
    // Crear el formulario de login con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Validación de email
      password: ['', [Validators.required, Validators.minLength(6)]]  // Validación de contraseña
    });
  }

  // Función para manejar el login
  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        // Intentar iniciar sesión con email y contraseña
        const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);

        // Si el login es exitoso, redirige al inicio
        this.router.navigate(['/inicio']);
      } catch (error: unknown) {
        // Manejo de errores, si ocurre algo en el login
        if (error instanceof Error) {
          console.error('Error en el login:', error.message);
          alert('Error en el login: ' + error.message);
        } else {
          console.error('Error desconocido en el login:', error);
          alert('Ha ocurrido un error desconocido');
        }
      }
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }
}
