import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "ng-packagr/lib/utils/log";
import {UserService} from "../../app/user/services/user.service";
import {userEndpoints} from "../../app/user/types/user-endpoints.interface";
import { SerachResult } from 'src/app/common/types/searchResult';
import { SerachRequest } from 'src/app/common/types/searchRequest';
import {ProductService} from "../../app/marketplace/services/product.service";
import {User} from "../../app/user/types/user.interface";
import {constants} from "../../app/common/constants";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  UrlValue:string="";
  nameValue:string="";
  ageValue:number=0;
  BalanceValue:number=0;
  EmailValue:string="";
  lastnameValue:string="";
  PhoneNumberValue:number=0;
  PasswordValue:string="";
  selectedFilters: string[] = [];
  row :any[]=[]
  updaterow()
  {
    this.userService.getUsers({page: 1, limit: 10}).subscribe(
        (result) => {
          console.log(result)
          this.row = result.items;

        }
    )
  }

constructor(private userService:UserService) {
    this.updaterow();
  }
ngOnInit() {
}

  // row = [
  //   { img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDtJTnqghREtYf4tRHvGBH-1H0TgSyvAbKSwcQTX8bA&s',
  //     id : 1,
  //     name: 'lking',
  //     balance:69
  //   },
  //   {
  //     img_url: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/35385727_1522369791224495_2105769405202825216_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=zf0uOh53CoQAX-duk5n&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBT8PUUgI529MmWEvaeMdX8EG05vMgWPm6lp-g76iOTQA&oe=65D6B86D',
  //     id : 2,
  //     name: 'gaddorelkharrat',
  //     balance:42,
  //
  //   },
  //   {
  //     img_url: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.18169-9/12376465_971341059626039_3706420431076348835_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=pxso2MVVZmwAX9NjL7X&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDUzl_CTHj5EhtQsTaPdrYD85FGDUHezUlX5WhQhJiTMQ&oe=65D68FD5',
  //     id : 3,
  //     name: 'merhben',
  //     balance:109,
  //
  //   }
  // ];
  filterRows(): any[] {
    if (this.selectedFilters.length === 0) {
      // If no checkboxes selected, return all rows
      return this.row;
    }

    // Filter rows based on the selected checkboxes
    return this.row.filter(item =>
      this.selectedFilters.some(filter => {
        if (filter === 'name') {
          const filteredRows = this.row.sort((a, b) => {
            const nameA = a.name.charAt(0).toLowerCase();
            const nameB = b.name.charAt(0).toLowerCase();

            if (nameA < nameB) {
              return -1;
            } else if (nameA > nameB) {
              return 1;
            } else {
              return 0;
            }
          });
          return filteredRows;
        } else if (filter === 'id') {
          const filteredRows = this.row.sort((a:any, b:any) => a.id - b.id);
          return filteredRows;
        } else if (filter === 'balance') {
          const filteredRows = this.row.sort((a:any, b:any) => a.balance - b.balance);
          return filteredRows;

        }

        return false;
      })
    );
  }
  updateFilters(property: string): void {
    if (this.selectedFilters.includes(property)) {
      // If property already selected, remove it
      this.selectedFilters = this.selectedFilters.filter(filter => filter !== property);
    } else {
      // If property not selected, add it
      this.selectedFilters.push(property);
    }
  }



  addUser() {
    let user:User = {
      name:'',
      lastName:'',
      age:0,
      phoneNumber:0,
      email:'',
      address:'',
      password:'',
      solde:0,
      image: '',
      orders:[]
    }
    user.name=this.nameValue;
    user.lastName=this.lastnameValue;
    user.age=this.ageValue;
    user.phoneNumber=this.PhoneNumberValue;
    user.password=this.PasswordValue;
    user.solde= this.BalanceValue;
    user.image=this.UrlValue;
    user.email=this.EmailValue;

    this.userService.addUser(user).subscribe(
        (result) => {
          this.updaterow();

        },(error)=>
    {
      console.log(error)
    }
    )
  }

   editUser(user:any): void {
     const i = this.row.findIndex(user => user.email ===this.EmailValue);
     const userId=this.row[i].id;
     const updatedUser=this.row[i]

     if (i !== -1) {
       // Update the user properties
       if (this.UrlValue != '')
         updatedUser.image = this.UrlValue;
       if (this.nameValue != '')
         updatedUser.name = this.nameValue;
       if (this.lastnameValue != '')
         updatedUser.lastName = this.lastnameValue;
       if (this.ageValue != 0)
         updatedUser.age = this.ageValue;
       if (this.BalanceValue != 0)
         updatedUser.solde = this.BalanceValue;
       if (this.PhoneNumberValue != 0)
         updatedUser.phoneNumber = this.PhoneNumberValue;




       this.userService.updateUser(userId,updatedUser).subscribe(
           (result) => {
             this.updaterow();
           },
           (error)=>{
             console.log(error);
           }
       )
     }

     }
  deleteRow(user:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.userService.deleteUser(user.id).subscribe(
          (result) => {
            this.updaterow();
          },
          (error)=>{
            console.log(error);
          }
      )

    }
  }
}
