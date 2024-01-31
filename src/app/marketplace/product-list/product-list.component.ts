import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product.interface';
import { SerachResult } from 'src/app/common/types/searchResult';
import { SerachRequest } from 'src/app/common/types/searchRequest';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!:Product[];
  metaData:any;
  searchRequest: SerachRequest;
  constructor(private productService:ProductService)
  {
    this.searchRequest={page:1,limit:10};
  }
  ngOnInit(): void {
    
    this.productService.getProducts(this.searchRequest).subscribe(
      (result)=>{
        this.products=result.items;
        this.metaData=result.meta;
        
        
      }
    )
  }
  nextPage(){
    
    this.searchRequest.page++;
    this.metaData['currentPage']=this.searchRequest.page;
    
    this.search()
    console.log(this.metaData);
  }
  perviousPage(){
    
    this.searchRequest.page--;
    this.metaData['currentPage']=this.searchRequest.page;
    this.search()
    console.log(this.metaData);
  }
  search()
  {
    this.productService.getProducts(this.searchRequest).subscribe(
      (result)=>{
        this.products=result.items;
        this.metaData=result.meta;
        
        
        
        
      }
    )
    
    
  }
  searchByPage(page:number){
    this.searchRequest.page=page;
    this.metaData['currentPage']=this.searchRequest.page;
    this.search();
  }

  
}
