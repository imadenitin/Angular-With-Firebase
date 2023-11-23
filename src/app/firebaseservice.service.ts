import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  constructor(private firestore: Firestore) {}

  getFirebaseData(): Observable<any> {
    const collectionInstance = collection(this.firestore, 'users');
    return collectionData(collectionInstance, { idField: 'id' });
  }

  deleteFirebaseData(id: string): Promise<void> {
    const deleteInstance = doc(this.firestore, 'users', id);
    return deleteDoc(deleteInstance);
  }
}
