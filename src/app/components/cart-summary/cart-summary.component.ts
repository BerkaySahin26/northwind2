import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cartItem';
import { CartItems } from './../../models/cartItems';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule,MatSelectModule,FormsModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
cartItems:CartItem[];
}
