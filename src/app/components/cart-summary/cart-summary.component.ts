import { Product } from './../../models/product';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cartItem';
import { CartItems } from './../../models/cartItems';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule,MatSelectModule,FormsModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {
cartItems:CartItem[] =[];
constructor(private cartService:CartService, private toastr:ToastrService){}

ngOnInit(): void {

    this.getCart();

  }

  getCart(){
    this.cartItems = this.cartService.list();
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastr.error("Silindi",product.productName + "Sepetten silindi.")
  }
}
