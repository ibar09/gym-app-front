import { Product } from "../marketplace/types/product.interface";

export class GlobalApp {
    constructor() {}
    public isLoggedIn(): boolean {
        return localStorage.getItem('token')!=undefined;
    }
    public logOut()
    {
        localStorage.removeItem('token');
        
    }
    public getCartItems(): any{
        return JSON.parse(localStorage.getItem('cartItems') || '[]')
    }
    public setCartItems(cartItems:any[])
    {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));


    }
}