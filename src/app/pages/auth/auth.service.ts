// auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Asegúrate de tener importado AngularFireAuth
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Asegúrate de importar map para transformar los datos

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any = null; // Para almacenar el usuario actual, puedes usar un tipo más específico si lo deseas

  constructor(private auth: Auth, private router: Router, private afAuth: AngularFireAuth) {
    // Escucha el estado de autenticación desde el constructor y actualiza el usuario
    this.afAuth.authState.subscribe(user => {
      this.currentUser = user;
    });
  }
    
  // Método para obtener el ID del usuario actual como un Observable
  getUserId(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      map(user => user?.uid || null)
    );
  }

  // Método para registrar un nuevo usuario
  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  }

  // Método para iniciar sesión
  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  }

  // Método para cerrar sesión
  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

  // Método para obtener el estado actual del usuario
  getCurrentUser(): Observable<any> {
    return this.afAuth.authState;
  }
}
