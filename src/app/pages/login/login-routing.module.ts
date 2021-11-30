import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class LoginPageRoutingModule {}
=======
export class LoginPageRoutingModule {}
>>>>>>> 27d28d790bf8acba4e40fca9f5c3ef47bea830eb
