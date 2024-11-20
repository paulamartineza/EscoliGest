import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private remindersUpdatedSubject = new Subject<void>(); // Para emitir cuando los recordatorios se actualicen

  constructor(private firestore: AngularFirestore) { }

  createReminder(reminder: any): Promise<void> {
    return this.firestore
      .collection('reminders')
      .add(reminder)
      .then(() => {
        console.log('Recordatorio creado exitosamente');
      })
      .catch((error) => {
        console.error('Error al crear el recordatorio:', error);
        throw error; // Propagar el error para manejarlo en el componente
      });
  }


  // Obtener los recordatorios del usuario autenticado
  getUserReminders(userId: string): Observable<any[]> {
    return this.firestore.collection('reminders', ref => ref.where('userId', '==', userId)).valueChanges();
  }

  // Emitir un evento cuando los recordatorios se actualicen
  triggerReminderUpdate() {
    this.remindersUpdatedSubject.next();
  }

  // Escuchar actualizaciones de recordatorios
  onRemindersUpdated(): Observable<void> {
    return this.remindersUpdatedSubject.asObservable();
  }
}
