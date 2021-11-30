import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
<<<<<<< HEAD
import { Storage } from '@capacitor/storage';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';

const CART_STORAGE_KEY = 'MY_CART';
const ID_STORAGE_KEY = 'MY_ID';
 
const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);
 
=======
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';

>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
<<<<<<< HEAD
  datas = []
  currentUser: User = null;
  cart = new BehaviorSubject({});
  cartKey = null;
  productsCollection: AngularFirestoreCollection;
=======
  currentUser: User = null;
>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
 
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
<<<<<<< HEAD
    this.productsCollection = this.afs.collection('products');
=======
>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
  }

  async signup({ email, password }): Promise<any> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    const uid = credential.user.uid;
<<<<<<< HEAD
    
    return this.afs.doc(
      `users/${uid}`
=======

    return this.afs.doc(
      users/${uid}
>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
    ).set({
      uid,
      email: credential.user.email,
    })
  }
<<<<<<< HEAD

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
=======
>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
 
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
<<<<<<< HEAD
 
  getProducts() {
    return this.productsCollection.valueChanges({ idField: 'id' });
  }
  
  async loadCart() {
    const resultKey = await Storage.get({ key: CART_STORAGE_KEY });
    const resultID = await Storage.get({ key: ID_STORAGE_KEY });

    if (resultKey.value && resultID.value == this.currentUser.uid) {
      console.log('carrinho existe, carregando carrinho...')
      this.cartKey = resultKey.value;
      this.afs.collection('carts').doc(this.cartKey).valueChanges().subscribe((result: any) => {
        delete result['lastUpdate'];
        this.cart.next(result || {});
      });
    } else {
      console.log('carrinho não existe, gerando um novo carrinho..')
      // Gera um novo carrinho
      const fbDocument = await this.afs.collection('carts').add({
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        userID: this.currentUser.uid
      });
      this.cartKey = fbDocument.id;
      // Armazena as duas chaves no browser/local
      await Storage.set({ key: CART_STORAGE_KEY, value: this.cartKey });
      await Storage.set({ key: ID_STORAGE_KEY, value: this.currentUser.uid });
      // Realiza as mudanças no carrinho (horário, cartão novo e etc.)
      this.afs.collection('carts').doc(this.cartKey).valueChanges().subscribe((result: any) => {
        delete result['lastUpdate'];
        this.cart.next(result || {});
      });
    }
  }
  
  addToCart(id) {
    // Update the FB cart
    this.afs.collection('carts').doc(this.cartKey).update({
      [id]: INCREMENT,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
   
    // Update the stock value of the product
    this.productsCollection.doc(id).update({
      stock: DECREMENT
    });
  }
   
  removeFromCart(id) {
    // Update the FB cart
    this.afs.collection('carts').doc(this.cartKey).update({
      [id]: DECREMENT,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
   
    // Update the stock value of the product
    this.productsCollection.doc(id).update({
      stock: INCREMENT
    });
  }
   
  async checkoutCart() {
    // Create an order
    await this.afs.collection('orders').add(this.cart.value);
   
    // Clear old cart
    this.afs.collection('carts').doc(this.cartKey).set({
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
=======
>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
}