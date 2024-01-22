import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})

export class UseraccountComponent {
 
  selectedSection: 'orders' | 'trainingProgram' | 'profileSettings' = "orders";
  constructor(private router: Router) {}

  navigateTo(section: 'profileSettings' | 'orders' | 'trainingProgram'): void {
    this.selectedSection = section;
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

user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  email: 'john.doe@example.com',
  password: '********'
};

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
