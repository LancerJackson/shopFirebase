import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class CuponsService {
  currentUser: User = null;
  cuponsCollection: AngularFirestoreCollection;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
    this.cuponsCollection = this.afs.collection('cupons');
  }
 
  getCupons() {
    return this.cuponsCollection.valueChanges({ idField: 'id' });
  }

}
