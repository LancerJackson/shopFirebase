import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoModalPageRoutingModule } from './carrinho-modal-routing.module';

import { CarrinhoModalPage } from './carrinho-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoModalPageRoutingModule
  ],
  declarations: [CarrinhoModalPage]
})
export class CarrinhoModalPageModule {}
