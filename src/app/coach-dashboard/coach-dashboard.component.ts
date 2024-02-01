import { Component, OnInit } from '@angular/core';
import { Coach } from '../trainers/types/coach.interface';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../user/services/user.service';
import { GlobalApp } from '../common/global';
import { User } from '../user/types/user.interface';
import { userEndpoints } from '../user/types/user-endpoints.interface';
import { CoachService } from '../trainers/services/coach.service';
import { coachEndpoints } from '../trainers/types/coach-endpoints.interface';
import { Order } from '../cart/types/order.interface';

@Component({
  selector: 'coach-dashboard',
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.css']
})
export class CoachDashboardComponent implements OnInit{
    display: string;
    selectedSection: 'orders' | 'Clients' | 'clientDetails' | 'trainingProgram' | 'addexercice' | 'profileSettings' = "orders";
    uploadedImage!: File;
    imageUrl!: string;
    user!: any;
    decodedToken!:any;
    rechargeAmount!:number;
    
    constructor(private router: Router,
                private userService: UserService,
                public app:GlobalApp,
                private coachService:CoachService) {
                  this.display="none";
                }
  
    
    ngOnInit(): void {
      if(localStorage.getItem('token'))
      {
        const helper = new JwtHelperService();
         this.decodedToken=helper.decodeToken(localStorage.getItem('token') as string);
        this.coachService.getUserByEmail(this.decodedToken['email']).subscribe(
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
        console.log("User not logged in");
        
      }
    }
    
    navigateTo(section: 'profileSettings' | 'orders' | 'Clients' | 'addexercice' ): void {
      this.selectedSection = section;
    }
    onFileSelected(event: any): void {
      this.uploadedImage=event.target.files[0];
      if(this.uploadedImage)
        {
          this.coachService.uploadUserPhoto(this.uploadedImage).subscribe(
            (res)=>{
              
              
              this.imageUrl=coachEndpoints.getImage+this.uploadedImage.name;
              location.reload();
              
            },
            (err)=>{
              console.log(err);
              
            }
          )
        }
      
    }
    ChargeAccount()
    {
      const updatedSolde = this.user.solde +this.rechargeAmount;
    
      this.user.solde = updatedSolde;
      this.coachService.updateCoach((this.user as any).id,this.user).subscribe();
      this.onCloseHandled();
    }
  
    logoutandnavigateToHome() {
      this.app.logOut();
      this.router.navigate(['']);
    }
    //order example:
    orders = [
      {
        orderID: 'order45754',
        items: [
          { quantity: 1, name: 'Protein Power' },
          { quantity: 2, name: 'Creatine' }
        ],
        amount: '756dt',
        date: '22-2024-1'
      },
      // Add more orders as needed
    ];
    // Example data for training program
    clients = [
      { id:'1',name: 'Client1', lastName: 'Last1', photoUrl: 'assets/avatar.png', weight: 70, height: 175,trainingProgram :[
        { date: '1-22-2024', exercise: ['Squats','push ups'] },{ date: '1-23-2024', exercise: 'Push-ups' },] },
      { id:'2',name: 'Client2', lastName: 'Last2', photoUrl: 'assets/avatar.png', weight: 65, height: 180,trainingProgram :[
        { date: '1-22-2024', exercise: ['Squats','push ups'] }] },
      // Add more clients as needed
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


  // Client details
  selectedClientDetails: any;
  viewDetails(client: any): void {
    this.selectedClientDetails = client;
    this.selectedSection = 'clientDetails';
    console.log(client);
  }
  trainingProgram = [
    { date: '1-22-2024', exercise: ['Squats','push ups'] },
    { date: '1-23-2024', exercise: 'Push-ups' },
];


viewTrainingProgram(client: any): void {
  this.selectedClientDetails = client;
  this.selectedSection = 'trainingProgram';
  console.log(client);
}

UpdateUser() { 
  const updatedUser: Coach = {
    id: this.user.id,
    name: this.user.name,
    lastName: this.user.lastName,
    age: this.user.age,
    email: this.user.email,
    phoneNumber: this.user.phoneNumber,
    address: this.user.address,
    password: this.user.password,
    solde: this.user.solde,
    image: this.user.image,
    orders: this.user.orders,
    description: this.user.description,
    programPrice: this.user.programPrice,
    // Include any other properties you want to update
  };

  this.coachService.updateCoach((this.user as any).id, updatedUser).subscribe(
    (updatedUser) => {
      console.log('User updated successfully', updatedUser);
    },
    (error) => {
      console.error('Error updating user', error);
      // Handle error if needed
    }
  );
}

}
