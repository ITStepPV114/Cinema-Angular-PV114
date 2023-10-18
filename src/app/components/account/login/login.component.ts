import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ILoginRequest } from '../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  constructor(private fb: FormBuilder,
              private accountService:AccountService){

  }
  login():void{
    if(this.loginForm.invalid){
      alert("Invalid value! Please enter again!");
      return;
    }
    let dataRequest:ILoginRequest=this.loginForm.value as ILoginRequest;
    this.accountService.login(dataRequest).subscribe(res=>{
      console.log(`Login! Token: ${res}`);
      this.accountService.saveToken(res);
    },err=>{
      console.warn(err);
    });
  }
}
