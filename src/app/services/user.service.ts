import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Método para obtener el perfil del usuario desde Firestore
  getUserProfile(): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          // Obtener el perfil del usuario por UID
          return this.firestore.collection('users').doc(user.uid).valueChanges();
        } else {
          // Retorna null si el usuario no está autenticado
          return of(null);
        }
      })
    );
  }

  // Método para obtener el UID del usuario actual
  async getUserId(): Promise<string | null> {
    const user = await this.afAuth.currentUser;
    return user ? user.uid : null;
  }
}
