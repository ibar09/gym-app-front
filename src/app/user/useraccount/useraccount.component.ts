import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../types/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalApp } from 'src/app/common/global';



@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit{
  
  selectedSection: 'orders' | 'trainingProgram' | 'profileSettings' = "orders";
  constructor(private router: Router,
              private userService: UserService,
              public app:GlobalApp) {
                
              }

  user!:User;
  ngOnInit(): void {
    if(localStorage.getItem('token'))
    {
      const helper = new JwtHelperService();
      const decodedToken=helper.decodeToken(localStorage.getItem('token') as string);
      this.userService.getUserByEmail(decodedToken['email']).subscribe(
        (res)=>{
          this.user=res; 
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
  
  navigateTo(section: 'profileSettings' | 'orders' | 'trainingProgram'): void {
    this.selectedSection = section;
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


}
