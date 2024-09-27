import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from '@angular/forms'; // NgFormModule buradan import ediliyor
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatButtonModule, MatToolbarModule, MatSelectModule, RouterOutlet, CommonModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

products:Product[] = [];
constructor(){}


ngOnInit(): void {
}

}
