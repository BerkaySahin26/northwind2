import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductAddComponent } from './components/product-add/product-add.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path:"products/category/:categoryId",component:ProductComponent}, // CategoryComponent'e yönlendirme
  {path: "products/add",component:ProductAddComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
