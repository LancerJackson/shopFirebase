import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CarrinhoPage } from '../carrinho/carrinho.page';
import { ProductService } from '../../services/product.service';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: 'produtos.page.html',
  styleUrls: ['produtos.page.scss'],
})
export class ProdutosPage implements OnInit, AfterViewInit {
  products: Observable<any[]>;
  @ViewChild('myfab', { read: ElementRef }) carBtn: ElementRef;
  cart = {};
  cartAnimation: Animation;

  constructor(private productService: ProductService, private animationCtrl: AnimationController, private modalCtrl: ModalController, private router: Router) {}
 

  ngOnInit() {
    this.products = this.productService.getProducts();
 
    // Listen to Cart changes
    this.productService.cart.subscribe(value => {
      this.cart = value;
    });
  }
 
  ngAfterViewInit() {
    // Setup an animation that we can reuse
    this.cartAnimation = this.animationCtrl.create('cart-animation');
    this.cartAnimation
    .addElement(this.carBtn.nativeElement)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 0.8, transform: 'scale(0.9)' },
      { offset: 1, transform: 'scale(1)' }
    ])
    .duration(300)
    .easing('ease-out');
  }
 
  addToCart(event, product) {
    event.stopPropagation();
    this.productService.addToCart(product.id);
    this.cartAnimation.play();
  }
 
  removeFromCart(event, product) {
    event.stopPropagation();
    this.productService.removeFromCart(product.id);
    this.cartAnimation.play();
  }
 
  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CarrinhoPage
    });
    await modal.present();
  }
  
  signOut() {
    this.productService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }
}