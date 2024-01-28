import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  UrlValue:string="";
  IdValue:number=0;
  nameValue:string="";
  BalanceValue:number=0;
  selectedFilters: string[] = [];





    row = [
    { img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDtJTnqghREtYf4tRHvGBH-1H0TgSyvAbKSwcQTX8bA&s',
      id : 1,
      name: 'lking',
      balance:69
    },
    {
      img_url: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/35385727_1522369791224495_2105769405202825216_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=zf0uOh53CoQAX-duk5n&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBT8PUUgI529MmWEvaeMdX8EG05vMgWPm6lp-g76iOTQA&oe=65D6B86D',
      id : 2,
      name: 'gaddorelkharrat',
      balance:42,

    },
    {
      img_url: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.18169-9/12376465_971341059626039_3706420431076348835_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=pxso2MVVZmwAX9NjL7X&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDUzl_CTHj5EhtQsTaPdrYD85FGDUHezUlX5WhQhJiTMQ&oe=65D68FD5',
      id : 3,
      name: 'merhben',
      balance:109,

    }
  ];
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
    let obj = {
      img_url:'',
      id: 0,
      name: '',
      balance:0,

    }
    obj.img_url=this.UrlValue;
    obj.id= this.IdValue;
    obj.name=this.nameValue;
    obj.balance= this.BalanceValue;

    this.row.push(obj)
    console.log(this.row)
  }

   editUser(): void {
     const userIndex = this.row.findIndex(user => user.id ===+this.IdValue);

     if (userIndex !== -1) {
       // Update the user properties
       if (this.nameValue != '')
         this.row[userIndex].name = this.nameValue;
       if (this.UrlValue != '')
         this.row[userIndex].img_url = this.UrlValue;
       if (this.BalanceValue != 0)
         this.row[userIndex].balance = this.BalanceValue;
     }
   }
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }
  }
}
