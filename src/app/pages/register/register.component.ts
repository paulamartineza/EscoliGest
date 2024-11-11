import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
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

    const { name, email, phone, role, password } = this.registrationForm.value;

    try {
      // Registra el usuario en Firebase Auth
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      
      if (userCredential.user) {
        // Guarda los datos adicionales del usuario en Firestore
        await this.firestore.collection('users').doc(userCredential.user.uid).set({
          name,
          email,
          phone,
          role,
          uid: userCredential.user.uid
        });

        // Redirige a la página de inicio de sesión después de registrar
        alert("Registro exitoso. Ahora puede iniciar sesión.");
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Hubo un problema al registrar el usuario: " + error);
    }
  }
}
