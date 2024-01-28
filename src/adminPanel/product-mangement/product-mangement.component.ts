import { Component } from '@angular/core';

@Component({
  selector: 'app-product-mangement',
  templateUrl: './product-mangement.component.html',
  styleUrls: ['./product-mangement.component.css']
})
export class ProductMangementComponent {

  UrlValue:string="";
  IdValue:number=0;
  ProductNameValue:string="";
  PriceValue:number=0;
  selectedFilters: string[] = [];


  row = [
    { img_url:'https://per4mbetter.com/cdn/shop/products/WheyProtein_Brownie_900g_copy_2000x_57cf41d3-9991-4daf-8957-2a809da2ea2f_2000x.png?v=1637252082',
      id : 1,
      ProductName: 'PER4M WHEY PROTEIN',
      Price:169
    },
    {
      img_url: 'https://i5.walmartimages.com/seo/Body-Fortress-Whey-Protein-Powder-Chocolate-Flavored-Gluten-Free-60-G-Protein-Per-Serving-5-Lbs_24e2fcbf-c74d-42bd-bd8d-394981b43483.504a66284591137690e45024fcada579.png',
      id : 2,
      ProductName: 'Whey Protein Powder, Chocolate Flavored',
      Price:89,

    },
    {
      img_url: 'https://m.media-amazon.com/images/I/71XzANehVAL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      id : 3,
      ProductName: 'Optimum Nutrition Gold Standard 100% Whey',
      Price:59,

    },
    { img_url:'https://per4mbetter.com/cdn/shop/products/WheyProtein_Brownie_900g_copy_2000x_57cf41d3-9991-4daf-8957-2a809da2ea2f_2000x.png?v=1637252082',
      id : 4,
      ProductName: 'PER4M WHEY PROTEIN',
      Price:129
    },
    {
      img_url: 'https://m.media-amazon.com/images/I/71XzANehVAL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      id : 5,
      ProductName: 'Optimum Nutrition Gold Standard 100% Whey',
      Price:269,

    },
    {
      img_url: 'https://i5.walmartimages.com/seo/Body-Fortress-Whey-Protein-Powder-Chocolate-Flavored-Gluten-Free-60-G-Protein-Per-Serving-5-Lbs_24e2fcbf-c74d-42bd-bd8d-394981b43483.504a66284591137690e45024fcada579.png',
      id : 6,
      ProductName: 'Whey Protein Powder, Chocolate Flavored',
      Price:59,

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
        if (filter === 'ProductName') {
          const filteredRows = this.row.sort((a, b) => {
            const nameA = a.ProductName.charAt(0).toLowerCase();
            const nameB = b.ProductName.charAt(0).toLowerCase();

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


  addProduct() {
    let obj = {
      img_url:'',
      id: 0,
      ProductName: '',
      Price:0,

    }
    obj.img_url=this.UrlValue;
    obj.id= this.IdValue;
    obj.ProductName=this.ProductNameValue;
    obj.Price= this.PriceValue;

    this.row.push(obj)
  }

  editProduct(): void {
    const userIndex = this.row.findIndex(user => user.id ===+this.IdValue);

    if (userIndex !== -1) {
      // Update the user properties
      if (this.ProductNameValue != '')
        this.row[userIndex].ProductName = this.ProductNameValue;
      if (this.UrlValue != '')
        this.row[userIndex].img_url = this.UrlValue;
      if (this.PriceValue != 0)
        this.row[userIndex].Price = this.PriceValue;
    }
  }
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }
  }





}
