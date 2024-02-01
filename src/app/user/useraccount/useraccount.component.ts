import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../types/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalApp } from 'src/app/common/global';
import { constants } from 'src/app/common/constants';
import { userEndpoints } from '../types/user-endpoints.interface';
import { OrderService } from 'src/app/cart/services/order.service';
import { Order } from 'src/app/cart/types/order.interface';



@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit{
  display: string;
  selectedSection: 'orders' | 'trainingProgram' | 'profileSettings' = "orders";
  uploadedImage!: File;
  imageUrl!: string;
  user!:any;
  orders!:Order[];
  rechargeAmount!:number;
  constructor(private router: Router,
              private userService: UserService,
              public app:GlobalApp,
              private orderService:OrderService) {
                this.display="none";
              }

  
  ngOnInit(): void {
    if(localStorage.getItem('token'))
    {
      const helper = new JwtHelperService();
      const decodedToken=helper.decodeToken(localStorage.getItem('token') as string);
      if(decodedToken['role']=="coach")
      {
          this.userService.getUserByEmail(decodedToken['email']).subscribe(
        (res)=>{
          this.user=res; 
          if(this.user.image)
          {
            this.imageUrl=userEndpoints.getImage+this.user.image
          }
          else
          {
            this.imageUrl="assets/default_pic.jpg";
          }
        },
        (err)=> {
          console.log(err);
          
        }
      )
      }
      else
      {
        this.userService.getUserByEmail(decodedToken['email']).subscribe(
          (res)=>{
            this.user=res; 
            if(this.user.image)
            {
              this.imageUrl=userEndpoints.getImage+this.user.image
            }
            else
            {
              this.imageUrl="assets/default_pic.jpg";
            }
          },
          (err)=> {
            console.log(err);
            
          }
        )
      }
    }
    else
    {
      console.log("User not logged in");
      
    }
    this.orderService.getOrdersByEmail().subscribe(
      (res)=> {this.orders=res;
      }
    )
  
  }
  
  navigateTo(section: 'profileSettings' | 'orders' | 'trainingProgram'): void {
    this.selectedSection = section;
  }
  onFileSelected(event: any): void {
    this.uploadedImage=event.target.files[0];
    if(this.uploadedImage)
      {
        this.userService.uploadUserPhoto(this.uploadedImage).subscribe(
          (res)=>{
            
            
            this.imageUrl=userEndpoints.getImage+this.uploadedImage.name;
            location.reload();
            
          },
          (err)=>{
            console.log(err);
            
          }
        )
      }
    
  }
  

  logoutandnavigateToHome() {
    this.app.logOut();
    this.router.navigate(['']);
  }
 
  trainingProgram = [
    { date: '1-22-2024', exercise: ['Squats','push ups'] },
    { date: '1-23-2024', exercise: 'Push-ups' },
];


// Editable status for each field
isEditable: { [key: string]: boolean } = {
  firstName: false,
  lastName: false,
  age: false,
  email: false,
  password: false
};

toggleEditable(field: string): void {
  this.isEditable[field] = !this.isEditable[field];
  console.log("edit");
}


onSubmit() {
  
      this.openModal();
      
}

openModal() {
this.display = "block";
}
onCloseHandled() {
this.display = "none";
}
ChargeAccount()
{
  const updatedSolde = this.user.solde +this.rechargeAmount;

  this.user.solde = updatedSolde;
  this.userService.updateUser((this.user as any).id,this.user).subscribe();
  this.onCloseHandled();
}

}
