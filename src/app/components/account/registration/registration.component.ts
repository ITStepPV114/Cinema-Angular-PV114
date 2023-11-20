import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { IRegistrationRequest } from '../account';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  hide = true;
  loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
    email:['',Validators.required]
  });

  constructor(private fb: FormBuilder,
    private accountService:AccountService,
    private router:Router){
}

register():void{
  if(this.loginForm.invalid){
    alert("Invalid value! Please enter again!");
    return;
  }
  let dataRequest:IRegistrationRequest=this.loginForm.value as IRegistrationRequest;

  this.accountService.registration(dataRequest).subscribe({
    next: (res:string)=>{
    console.log(`Login! Token: ${res}`);
    this.accountService.saveToken(res);
    this.router.navigateByUrl('/movies');
    },
    error: (err:any)=>{
    console.warn(err);
    window.alert("invalid login or password");
  }});
}
}
