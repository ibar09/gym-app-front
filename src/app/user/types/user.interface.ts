import { Order } from "src/app/cart/types/order.interface";

export interface User {
    name:string;
    lastName:string;
    age:number;
    phoneNumber:number; 
    email:string;
    address:string;   
    password:string;
    solde:number;
    image: string;
    orders: Order[];
}