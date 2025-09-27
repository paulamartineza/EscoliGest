// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any = null;

  constructor(private router: Router) {
    // Simulación: usuario no autenticado
    this.currentUser = null;
  }

  // Simulación: obtener el ID del usuario actual
  getUserId(): Observable<string | null> {
    return of(null); // Devuelve null porque no hay backend
  }

  // Simulación: registrar un nuevo usuario
  async register(email: string, password: string) {
    // Aquí deberías conectar con tu backend real
    throw new Error('Funcionalidad de registro no implementada.');
  }

  // Simulación: iniciar sesión
  async login(email: string, password: string) {
    // Aquí deberías conectar con tu backend real
    throw new Error('Funcionalidad de login no implementada.');
  }

  // Simulación: cerrar sesión
  async logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  // Simulación: obtener el estado actual del usuario
  getCurrentUser(): Observable<any> {
    return of(null); // Devuelve null porque no hay backend
  }
}
