import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginData } from 'src/app/auth/types/login.data.interface';
import { Router } from '@angular/router';
import { GlobalApp } from 'src/app/common/global';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:LoginData;
  display: string;
  loginMessage:string;
  loginButtonText:string;
  constructor (private authService:AuthService,private Router:Router,private app:GlobalApp){
    this.user={email:'',
      password:''
    }
    this.display="none";
    this.loginMessage="";
    this.loginButtonText="";
  }

onSubmit() {
    this.authService.login(this.user).subscribe(
      (result) =>
      {
        localStorage.setItem('token',result['access_token']);
        
        this.loginMessage="Welcome Back!";
        this.loginButtonText="Continue";
        this.openModal();
        
      },
      (err)=>
      {
        console.log(err);
        
        this.loginMessage="Email or Password are Wrong";
        this.loginButtonText="Try Again";

        this.openModal();
      }
    );
}

openModal() {
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
}

navigateToMyAccount() {
    const helper = new JwtHelperService();
    const decodedToken=helper.decodeToken(localStorage.getItem('token') as string);
    if(decodedToken['role']=='coach')
    this.Router.navigate(['coach-dashbord']);
    else
    this.Router.navigate(['my-account']);
}

}
