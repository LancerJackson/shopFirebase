import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoModalPage } from './carrinho-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhoModalPageRoutingModule {}
