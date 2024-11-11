// auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null;

  constructor(private auth: Auth, private router: Router) {
    // Escucha cambios en el estado de autenticación
    onAuthStateChanged(this.auth, (user) => {
      this.currentUser = user;
    });
  }

  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
