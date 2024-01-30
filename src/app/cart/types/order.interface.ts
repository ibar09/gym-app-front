import { Product } from "src/app/marketplace/types/product.interface";

export interface Order {
    uuid?:string;
    createdAt?:string;
    totalAmount: number;
    isPaid: boolean;
    products?: number[] | any[];
}