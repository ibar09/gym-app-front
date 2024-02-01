import { Component, Input, OnInit } from '@angular/core';
import { Coach } from '../trainers/types/coach.interface';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from '../trainers/services/coach.service';
import { GlobalApp } from '../common/global';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../cart/services/order.service';
import { UserService } from '../user/services/user.service';
import { Order } from '../cart/types/order.interface';

@Component({
  selector: 'app-coach-details',
  templateUrl: './coach-details.component.html',
  styleUrls: ['./coach-details.component.css']
})
export class CoachDetailsComponent implements OnInit{
  @Input() coach!:Coach;
  order!:Order;
  totalAmount!:number;
  constructor(
    private app:GlobalApp,
    private route: ActivatedRoute,
    private coachService: CoachService,
    private toastr: ToastrService,
    private orderService:OrderService,
    private userService:UserService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const coachId = +params['id']; 
      this.getCoachDetails(coachId);
    });
  }

  getCoachDetails(coachId: number): void {
    this.coachService.getCoachById(coachId).subscribe(coach => {
      this.coach = coach;
    });
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
          products:[]};
          this.orderService.addOrder(this.order).subscribe(
              (res)=>{this.toastr.success('Paiment Successful!');}
              
              
              
            )
        }
      }
    );
    
  }

}
