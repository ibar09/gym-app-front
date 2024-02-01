import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { GlobalApp } from 'src/app/common/global';
import { Product } from 'src/app/marketplace/types/product.interface';
import { OrderService } from '../services/order.service';
import { FactureComponent } from '../facture/facture.component';
import { Order } from '../types/order.interface';
import { UserService } from 'src/app/user/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/user/types/user.interface';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent  implements OnInit {
  trashIcon=faTrash;
  cartItems:any[] = [];
  order!:Order;
  totalAmount!:number;
  constructor(private app:GlobalApp,
    private orderService:OrderService,
    private userService:UserService,
    private toastr: ToastrService){

  }
  ngOnInit(): void {
    this.cartItems=this.app.getCartItems();
    this.cartItems=this.cartItems.map(product => ({
      ...product,
      amount: 1,
    }));
  }
  

  removeFromCart(item: Product): void {
    const index = this.app.getCartItems().findIndex((p:any)=>p.uuid===item.uuid);
    
    if (index !== -1) {

      const newCartItems=this.app.getCartItems().filter((p:any)=>p.uuid!==item.uuid);
      this.app.setCartItems(newCartItems);;
      this.cartItems.splice(index, 1);
    }
  }
  pay():void{
    const productIds=this.cartItems.map(item => item.id);
    this.app.getUser().subscribe(
      (user:any)=>{
        if(user.solde<this.totalAmount)
        {
          this.toastr.error('Not enough balance in your account! Please recharge.')
        }
        else
        {
          const updatedSolde = user.solde - this.totalAmount;

        user.solde = updatedSolde;
        this.userService.updateUser(user.id,user).subscribe(
          ()=>{
            
          }
        )
        this.order={
          totalAmount: this.totalAmount,
          isPaid: true,
          products: productIds
        };
          this.orderService.addOrder(this.order).subscribe(
              (res)=>{this.toastr.success('Paiment Successful!');}
              
              
              
            )
        }
      }
    );
    
  }
  handleTotalAmountChange(totalAmount: number): void {
    this.totalAmount=totalAmount;
    // Do whatever you need with the total amount in the parent component
  }
}
