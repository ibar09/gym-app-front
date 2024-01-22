import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user.interface';
import { SerachResult } from 'src/app/common/types/searchResult';
import { Observable } from 'rxjs';
import { SerachRequest } from 'src/app/common/types/searchRequest';
import { userEndpoints } from '../types/user-endpoints.interface';

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

  // Retrieve a single User by ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(userEndpoints.findById+userId.toString());
  }

  // Add a new product
  addUser(user: User): Observable<User> {
    return this.http.post<User>(userEndpoints.add, user);
  }

  // Update an existing User
  updateUser(userId: number, updatedUser: User): Observable<User> {
    return this.http.put<User>(userEndpoints.update+userId.toString(), updatedUser);
  }

  // Delete a User
  deleteUser(userId: number): Observable<void> {
 
    return this.http.delete<void>(userEndpoints.delete+userId.toString());
  }
}
