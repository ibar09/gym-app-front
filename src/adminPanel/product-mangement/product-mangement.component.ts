import { Component } from '@angular/core';
import {ProductService} from "../../app/marketplace/services/product.service";

@Component({
  selector: 'app-product-mangement',
  templateUrl: './product-mangement.component.html',
  styleUrls: ['./product-mangement.component.css']
})
export class ProductMangementComponent {

  UrlValue!:string;
  ProductNameValue!:string;
  DescriptionValue!:string;
  PriceValue!:number;
  productType!:string;

  selectedFilters: string[] = [];
  row :any[]=[];
  updaterow()
  {
    this.productService.getProducts({page: 1, limit: 1000}).subscribe(
        (result) => {
          console.log(result)
          this.row = result.items;

        }
    )
  }
  constructor(private productService:ProductService) {
    this.updaterow();
  }

  filterRows(): any[] {
    if (this.selectedFilters.length === 0) {
      // If no checkboxes selected, return all rows
      return this.row;
    }

    // Filter rows based on the selected checkboxes
    return this.row.filter(item =>
      this.selectedFilters.some(filter => {




        if (filter === 'ProductName') {
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
        } else if (filter === 'Price') {
          const filteredRows = this.row.sort((a:any, b:any) => a.price - b.price);
          return filteredRows;

        }
        else if (filter === 'creationDate') {
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


  addProduct() {
    let obj = {
      photo:'',
      name: '',
      price:0,
      description:'',
      productType:'Nutrition'

    }
    obj.photo=this.UrlValue;
    obj.name=this.ProductNameValue;
    obj.price= this.PriceValue;
    obj.description=this.DescriptionValue;
    console.log('product type est:===>'+this.productType)
    // obj.productType=this.productType;
    this.productService.addProduct(obj).subscribe(
        (result) => {
          this.updaterow();

        },(error)=>
        {
          console.log(error)
        }
    )
  }

  editProduct(product:any): void {
    const i = this.row.findIndex(productRow => productRow.id ===+product.id);
    const productId=this.row[i].id;
    const updatedProduct=this.row[i]

    if (i !== -1) {
      if (this.ProductNameValue != '')
        updatedProduct.name = this.ProductNameValue;
      if (this.UrlValue != '')
        updatedProduct.photo = this.UrlValue;
      console.log(this.UrlValue)
      if (this.PriceValue != 0)
        updatedProduct.price = this.PriceValue;
      if (this.DescriptionValue !='')
        updatedProduct.description = this.DescriptionValue;
      if (this.productType !='')
        updatedProduct.productType = this.productType;

      this.productService.updateProduct(+productId,updatedProduct).subscribe(
          (result) => {
            this.updaterow();
          },
          (error)=>{
            console.log(error);
          }
      )
    }
  }
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.productService.deleteProduct(x.id).subscribe(
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
