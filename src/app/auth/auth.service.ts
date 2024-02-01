import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from './types/login.data.interface';
import { authEndpoints } from './types/auth-endpoints.interface';
import { User } from '../user/types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(loginData:LoginData)
  {
    return this.http.post<any>(authEndpoints.login,loginData)
  }
  register(user:any,check:boolean){
    if(check)
    {
      return this.http.post<any>(authEndpoints.coachRegister,user);
    }
    else
    return this.http.post<any>(authEndpoints.userRegister,user);
  }

}
