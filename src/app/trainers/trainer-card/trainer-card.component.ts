import { Component, Input, OnInit } from '@angular/core';
import { Coach } from '../types/coach.interface';
import { CoachService } from '../services/coach.service';
import { GlobalApp } from 'src/app/common/global';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/cart/services/order.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user/services/user.service';
import { Order } from 'src/app/cart/types/order.interface';

@Component({
  selector: 'trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {
  @Input() coach!:Coach;
  order!:Order;
  totalAmount!:number;
  constructor(private coachservice:CoachService,
    private app:GlobalApp,
    private router:Router,
    private toastr: ToastrService,
    private orderService:OrderService,
    private userService:UserService,)
  { }
  ngOnInit(): void {}
  
  viewDetails() {
    this.router.navigate(['coachdetails', this.coach.id]);
  }
  pay():void{
    const totalAmount = this.coach.programPrice;
    this.app.getUser().subscribe(
      (user:any)=>{
        if(user.solde<totalAmount)
        {
          this.toastr.error('Not enough balance in your account! Please recharge.')
        }
        else
        {
          const updatedSolde = user.solde - totalAmount;

        user.solde = updatedSolde;
        this.userService.updateUser(user.id,user).subscribe(
          ()=>{
            
          }
        )
        this.order={totalAmount: totalAmount,
          isPaid: true,
          products: []};
          this.orderService.addOrder(this.order).subscribe(
              (res)=>{this.toastr.success('Paiment Successful!');}
              
              
              
            )
        }
      }
    );
    
  }
}
