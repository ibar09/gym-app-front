// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { SerachRequest } from 'src/app/common/types/searchRequest';
// import { SerachResult } from 'src/app/common/types/searchResult';
// import { Coach } from '../types/coach.interface';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class CoachService {

//   constructor(private http:HttpClient) { }
//   getUsers(searchRequest:SerachRequest): Observable<SerachResult<Coach>> {
//     return this.http.get<SerachResult<Coach>>(userEndpoints.findAll,{params: {page : searchRequest.page,limit:searchRequest.limit}});
//   }
//   getUserByEmail(email:string)
//   {
//     return this.http.get<Coach>(userEndpoints.findByEmail+email);
//   }

 
//   getUserById(userId: number): Observable<Coach> {
//     return this.http.get<Coach>(userEndpoints.findById+userId.toString());
//   }

//   addUser(user: User): Observable<Coach> {
//     return this.http.post<Coach>(userEndpoints.add, user);
//   }

//   updateUser(userId: number, updatedUser: User): Observable<Coach> {
//     return this.http.patch<Coach>(userEndpoints.update+userId.toString(), updatedUser);
//   }

//   deleteUser(userId: number): Observable<void> {
 
//     return this.http.delete<void>(userEndpoints.delete+userId.toString());
//   }

//   uploadUserPhoto(file:File){
//     const formData: FormData = new FormData();
//     formData.append('file', file);
//     return this.http.post<any>(userEndpoints.upload,formData);
//   }
//   getUserImage(imageName: string){
//       return this.http.get<any>(userEndpoints.getImage+imageName);
//   }
// }
