import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProdutosPage } from './produtos.page';
 
import { ProdutosPageRoutingModule } from './produtos-routing.module';
import { CarrinhoPageModule } from '../carrinho/carrinho.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    CarrinhoPageModule
  ],
  declarations: [ProdutosPage]
})
export class ProdutosPageModule {}