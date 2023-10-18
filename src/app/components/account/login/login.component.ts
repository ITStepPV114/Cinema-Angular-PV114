import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder){

  }
  login():void{
    if(this.loginForm.invalid){
      alert("Invalid value! Please enter again!");
      return;
    }

    


  }
}
