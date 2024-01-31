import { Component, OnInit } from '@angular/core';
import { Coach } from '../trainers/types/coach.interface';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../user/services/user.service';
import { GlobalApp } from '../common/global';
import { User } from '../user/types/user.interface';
import { userEndpoints } from '../user/types/user-endpoints.interface';

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
    user!: User;
    constructor(private router: Router,
                private userService: UserService,
                public app:GlobalApp) {
                  this.display="none";
                }
  
    
    ngOnInit(): void {
      if(localStorage.getItem('token'))
      {
        const helper = new JwtHelperService();
        const decodedToken=helper.decodeToken(localStorage.getItem('token') as string);
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

}
