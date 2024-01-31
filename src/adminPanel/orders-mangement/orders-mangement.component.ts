import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-mangement',
  templateUrl: './orders-mangement.component.html',
  styleUrls: ['./orders-mangement.component.css']
})
export class OrdersMangementComponent {
  IdValue:number=0;
  OrderedBy:string="";
  PriceValue:number=0;
  CreationDate:string='';
  StateValue:string="";
  selectedFilters: string[] = [];


  // updaterow()
  // {
  //   this.userService.getUsers({page: 1, limit: 10}).subscribe(
  //       (result) => {
  //         console.log(result)
  //         this.row = result.items;
  //
  //       }
  //   )
  // }


  row = [
    { id : 1,
      OrderedBy: 'Elking',
      Price:69,
      CreationDate:'02-17-2023',
      StateValue:"Not Delivered Yet"
    },
    {
      id : 2,
      OrderedBy: 'gadour',
      Price:645,
      CreationDate:'09-01-2023',
      StateValue:"Delivered"
    },
    {
      id : 3,
      OrderedBy: 'merhben',
      Price:486,
      CreationDate:'05-10-2023',
      StateValue:"Delivered"
    },
    {
      id : 4,
      OrderedBy: 'Matyem Afif',
      Price:869,
      CreationDate:'02-02-2022',
      StateValue:"Not Delivered Yet"
    },
    {
      id : 5,
      OrderedBy: 'kamel Karoui',
      Price:69,
      CreationDate:'02-01-2014',
      StateValue:"Delivred"
    },
  ];

  filterRows(): any[] {
    if (this.selectedFilters.length === 0) {
      // If no checkboxes selected, return all rows
      return this.row;
    }

    // Filter rows based on the selected checkboxes
    return this.row.filter(item =>
      this.selectedFilters.some(filter => {
        if (filter === 'OrderedBy') {
          const filteredRows = this.row.sort((a, b) => {
            const nameA = a.OrderedBy.charAt(0).toLowerCase();
            const nameB = b.OrderedBy.charAt(0).toLowerCase();

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
        } else if (filter === 'PriceAsc') {
          const filteredRows = this.row.sort((a:any, b:any) => a.Price - b.Price);
          return filteredRows;

        }
        else if (filter === 'PriceDesc') {
          const filteredRows = this.row.sort((a:any, b:any) => b.Price - a.Price);
          return filteredRows;

        }else if (filter === 'creationDate') {
          const filteredRows = this.row.sort((a:any, b:any) => new Date(a.CreationDate).getTime() - new Date(b.CreationDate).getTime());
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
  addOrder() {
    let obj = {
      id: 0,
      OrderedBy:'',
      Price: 0,
      CreationDate:'',
      StateValue:'',

    }
    obj.id=this.IdValue;
    obj.OrderedBy= this.OrderedBy;
    obj.Price=this.PriceValue;
    obj.CreationDate= this.CreationDate;
    obj.StateValue= this.StateValue;

    this.row.push(obj);
    console.log(this.row)
  }

  editOrder(): void {
    const orderIndex = this.row.findIndex(user => user.id ===+this.IdValue);

    if (orderIndex !== -1) {
      // Update the user properties
      if (this.OrderedBy != '')
        this.row[orderIndex].OrderedBy = this.OrderedBy;
      if (this.PriceValue !=0)
        this.row[orderIndex].Price = this.PriceValue;
      if (this.CreationDate !='')
        this.row[orderIndex].CreationDate = this.CreationDate;
      if (this.StateValue !='')
        this.row[orderIndex].StateValue = this.StateValue;

    }
  }
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }
  }




}
