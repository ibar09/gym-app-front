import {Order} from "../../cart/types/order.interface";

export interface User {
    id:number;
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
