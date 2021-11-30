<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialForm: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private productService: ProductService
  ) {}
 
  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.productService
      .signup(this.credentialForm.value)
      .then(
        (user) => {
          loading.dismiss();
          this.router.navigateByUrl('/home', { replaceUrl: true });
        },
        async (err) => {
          loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Falha no cadastro',
            message: err.message,
            buttons: ['OK'],
          });
 
          await alert.present();
        }
      );
  }
 
  // Easy access for form fields
  get email() {
    return this.credentialForm.get('email');
  }
  
  get password() {
    return this.credentialForm.get('password');
  }
}
=======
<ion-header>
  <ion-toolbar color="wineC">
    <ion-title>AdegaBeer - Login</ion-title>
  </ion-toolbar>
</ion-header>
 
<ion-content>
 
  <form [formGroup]="credentialForm">
    <ion-item>
      <ion-input
        placeholder="Email"
        formControlName="email"
        autofocus="true"
        clearInput="true"
      ></ion-input>
    </ion-item>
    <div *ngIf="(email.dirty  email.touched) && email.errors" class="errors">
      <span *ngIf="email.errors?.required">Necessário digitar um Email</span>
      <span *ngIf="email.errors?.email">Email invalido</span>
    </div>
 
    <ion-item class="ion-margin-top">
      <ion-input
      placeholder="Senha"
      type="password"
      formControlName="password"
      clearInput="true"
    ></ion-input>
    </ion-item>
    <div *ngIf="(password.dirty  password.touched) && password.errors" class="errors">
      <span *ngIf="password.errors?.required">Necessário digitar uma senha</span>
      <span *ngIf="password.errors?.minlength">Senha precisa ter mais de 6 caracteres</span>
    </div>
  </form>
 
    <ion-button (click)="signIn()" expand="full" color="wine" class="ion-margin-top">Entrar</ion-button>
 
</ion-content>
>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
