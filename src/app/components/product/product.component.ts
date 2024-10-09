import { Product } from './../../models/product';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // NgFormModule buradan import ediliyor
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    VatAddedPipe,
    FilterPipePipe,
    ToastrModule,
    ReactiveFormsModule


  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastr:  ToastrService,
    private cartService:CartService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
    console.log();
  }
  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
    console.log();
  }

  addToCart(product: Product) {
if(product.productId===1){
 this.toastr.error("Hata, Bu ürün sepete eklenemez")
}else{
  this.toastr.success("Sepete eklendi",product.productName)
  this.cartService.addToCart(product);
}
  }
}
