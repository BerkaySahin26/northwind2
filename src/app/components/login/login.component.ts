import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth.service';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSelectModule, CommonModule,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
constructor(private formBuilder:FormBuilder, private authService: AuthService, private toastrService:ToastrService){}
  ngOnInit(): void {
   this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required],

    })
  }

  login(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        //console.log(responseError)
        this.toastrService.error(responseError.error);

      })
    }
  }

}
