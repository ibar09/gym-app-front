import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user.interface';
import { SerachResult } from 'src/app/common/types/searchResult';
import { Observable } from 'rxjs';
import { SerachRequest } from 'src/app/common/types/searchRequest';
import { userEndpoints } from '../types/user-endpoints.interface';
import {Product} from "../../marketplace/types/product.interface";
import {productEndpoints} from "../../marketplace/types/product-endpoints.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(searchRequest:SerachRequest): Observable<SerachResult<User>> {
    return this.http.get<SerachResult<User>>(userEndpoints.findAll,{params: {page : searchRequest.page,limit:searchRequest.limit}});
  }


  getUserByEmail(email:string)
  {
    return this.http.get<User>(userEndpoints.findByEmail+email);
  }


  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(userEndpoints.findById+userId.toString());
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(userEndpoints.add, user);
  }

  updateUser(userId: number, updatedUser: User): Observable<User> {
    return this.http.patch<User>(userEndpoints.update+userId.toString(), updatedUser);
  }

  deleteUser(userId: number): Observable<void> {

    return this.http.delete<void>(userEndpoints.delete+userId.toString());
  }

  uploadUserPhoto(file:File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(userEndpoints.upload,formData);
  }
  getUserImage(imageName: string){
      return this.http.get<any>(userEndpoints.getImage+imageName);
  }
}
