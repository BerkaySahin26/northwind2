import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  productAddForm:FormGroup;
  constructor(private formbuilder:FormBuilder,private productService:ProductService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.createProductAddForm()
    this.add()

  }
  createProductAddForm(){
    this.productAddForm = this.formbuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]

    })
  }
  add(){
    if(this.productAddForm.valid){
    let productModel = Object.assign({},this.productAddForm.value)
    this.productService.add(productModel).subscribe(response=>{
      this.toastr.success(response.message,"Başarılı")
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastr.error(responseError.console.error.Errors[i].ErrorMessage,"Doğrulama hatası")

        }

      }


    })
    }else
    {
        this.toastr.error("Formunuz eksik","Dikkat")
    }
  }

}
