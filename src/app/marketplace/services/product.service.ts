
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../types/product.interface';
import { SerachResult } from 'src/app/common/types/searchResult';
import { productEndpoints } from '../types/product-endpoints.interface';
import { SerachRequest } from 'src/app/common/types/searchRequest';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 

  constructor(private http: HttpClient) {}

  // Retrieve all products
  getProducts(searchRequest:SerachRequest): Observable<SerachResult<Product>> {
    return this.http.get<SerachResult<Product>>(productEndpoints.findAll,{params: {page : searchRequest.page,limit:searchRequest.limit}});
  }

  // Retrieve a single product by ID
  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(productEndpoints.findById+productId.toString());
  }

  // Add a new product
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(productEndpoints.add, product);
  }

  // Update an existing product
  updateProduct(productId: number, updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(productEndpoints.update+productId.toString(), updatedProduct);
  }

  // Delete a product
  deleteProduct(productId: number): Observable<void> {
 
    return this.http.delete<void>(productEndpoints.delete+productId.toString());
  }
}

