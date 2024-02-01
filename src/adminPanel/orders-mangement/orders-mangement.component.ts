import { Component } from '@angular/core';
import {OrderService} from "../../app/cart/services/order.service";

@Component({
  selector: 'app-orders-mangement',
  templateUrl: './orders-mangement.component.html',
  styleUrls: ['./orders-mangement.component.css']
})
export class OrdersMangementComponent {
  products?: number[] | any[];
  OrderedBy!:string;
  PriceValue!:number;
  StateValue!:boolean;
  CreationDate!:string;
  selectedFilters: string[] = [];
  row :any[]=[];


  updaterow()
  {
    this.orderService.getOrders().subscribe(
        (result) => {
          this.row = result;

        }
    )
  }
  constructor(private orderService:OrderService) {
    this.updaterow();
  }


  // row = [
  //   { id : 1,
  //     OrderedBy: 'Elking',
  //     Price:69,
  //     CreationDate:'02-17-2023',
  //     StateValue:"Not Delivered Yet"
  //   },
  //   {
  //     id : 2,
  //     OrderedBy: 'gadour',
  //     Price:645,
  //     CreationDate:'09-01-2023',
  //     StateValue:"Delivered"
  //   },
  //   {
  //     id : 3,
  //     OrderedBy: 'merhben',
  //     Price:486,
  //     CreationDate:'05-10-2023',
  //     StateValue:"Delivered"
  //   },
  //   {
  //     id : 4,
  //     OrderedBy: 'Matyem Afif',
  //     Price:869,
  //     CreationDate:'02-02-2022',
  //     StateValue:"Not Delivered Yet"
  //   },
  //   {
  //     id : 5,
  //     OrderedBy: 'kamel Karoui',
  //     Price:69,
  //     CreationDate:'02-01-2014',
  //     StateValue:"Delivred"
  //   },
  // ];

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
          const filteredRows = this.row.sort((a:any, b:any) => a.totalAmount - b.totalAmount);
          return filteredRows;

        }
        else if (filter === 'PriceDesc') {
          const filteredRows = this.row.sort((a:any, b:any) => b.totalAmount - a.totalAmount);
          return filteredRows;

        }else if (filter === 'creationDate') {
          const filteredRows = this.row.sort((a:any, b:any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
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
      totalAmount:0,
      isPaid:true,

    }

    obj.totalAmount=this.PriceValue;
    obj.isPaid=this.StateValue;
    this.orderService.addOrder(obj).subscribe(
        (result) => {
          this.updaterow();

        },(error)=>
        {
          console.log(error)
        }
    )
  }


  editOrder(order:any): void {
    const i = this.row.findIndex(orderRow => orderRow.id ===+order.id);
    const orderId=this.row[i].id;
    const updatedOrder=this.row[i]

    if (i !== -1) {
        updatedOrder.isPaid = this.StateValue;
      if (this.PriceValue != 0)
        updatedOrder.totalAmount = this.PriceValue;


      this.orderService.updateOrder(orderId,updatedOrder).subscribe(
          (result) => {
            this.updaterow();
          },
          (error)=>{
            console.log(error);
          }
      )
    }

  }




  deleteRow(order:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.orderService.deleteOrder(order.id).subscribe(
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
