import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';
import { take } from 'rxjs/operators';
 
@Component({
  selector: 'app-carrinho-modal',
  templateUrl: './carrinho-modal.page.html',
  styleUrls: ['./carrinho-modal.page.scss'],
})
export class CarrinhoModalPage implements OnInit {
  products = [];
 
  constructor(private productService: ProductService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  ngOnInit() {
    const cartItems = this.productService.cart.value;
 
    this.productService.getProducts().pipe(take(1)).subscribe(allProducts => {
      this.products = allProducts.filter(p => cartItems[p.id]).map(product => {
        return { ...product, count: cartItems[product.id], uid: this.productService.currentUser.uid };
      });
    });
  }
 
  async checkout() {
    const alert = await this.alertCtrl.create({
      header: 'Sucesso',
      message: 'Obrigado por comprar conosco.',
      buttons: ['Continuar']
    });
 
    await alert.present();
 
    this.productService.checkoutCart();
    this.modalCtrl.dismiss();
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
}