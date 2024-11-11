import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  // Obtener todos los documentos de una colección
  getData(collectionName: string) {
    return this.firestore.collection(collectionName).valueChanges();
  }

  // Agregar un nuevo documento a una colección
  addData(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
  }

  // Eliminar un documento de una colección
  deleteData(collectionName: string, docId: string) {
    return this.firestore.collection(collectionName).doc(docId).delete();
  }
}
