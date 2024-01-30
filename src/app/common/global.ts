import { JwtHelperService } from "@auth0/angular-jwt";
import { Product } from "../marketplace/types/product.interface";
import { UserService } from "../user/services/user.service";
import { User } from "../user/types/user.interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class GlobalApp {

    user!:User;
    constructor(private userService:UserService) {}
    public isLoggedIn(): boolean {
        return localStorage.getItem('token')!=undefined;
    }
    public logOut()
    {
        localStorage.removeItem('token');
        
    }
    public getCartItems(): Product[]{
        return JSON.parse(localStorage.getItem('cartItems') || '[]')
    }
    public setCartItems(cartItems:Product[])
    {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));


    }
    public getUser() : Observable<User>
    {
        const helper = new JwtHelperService();
      const decodedToken=helper.decodeToken(localStorage.getItem('token') as string);
      return this.userService.getUserByEmail(decodedToken['email']);
    }
 
}