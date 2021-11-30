import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  currentUser: User = null;
 
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  async signup({ email, password }): Promise<any> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    const uid = credential.user.uid;

    return this.afs.doc(
      users/${uid}
    ).set({
      uid,
      email: credential.user.email,
    })
  }
 
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
}