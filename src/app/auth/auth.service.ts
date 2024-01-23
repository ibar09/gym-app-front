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
  register(user:User){
    return this.http.post<any>(authEndpoints.register,user);
  }

}
