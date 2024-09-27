import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from '@angular/forms'; // NgFormModule buradan import ediliyor
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductComponent,
    NaviComponent,
    CategoryComponent,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    CommonModule // FormsModule burada dahil ediliyor
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
}

