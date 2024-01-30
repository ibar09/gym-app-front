import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../types/order.interface';
import { orderEndpoints } from '../types/order-endpoint.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }


  getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(orderEndpoints.findById+orderId.toString());
  }
  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(orderEndpoints.findById);
  }

  addOrder(Order: Order): Observable<Order> {
    return this.http.post<Order>(orderEndpoints.add, Order);
  }

  updateOrder(orderId: number, updatedOrder: Order): Observable<Order> {
    return this.http.put<Order>(orderEndpoints.update+orderId.toString(), updatedOrder);
  }

  deleteOrder(orderId: number): Observable<void> {
 
    return this.http.delete<void>(orderEndpoints.delete+orderId.toString());
  }
  getOrdersByEmail()
  {
    return this.http.get<Order[]>(orderEndpoints.findByEmail);
  }

}
