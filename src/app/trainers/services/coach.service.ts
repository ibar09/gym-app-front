import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerachResult } from 'src/app/common/types/searchResult';
import { Coach } from '../types/coach.interface';
import { SerachRequest } from 'src/app/common/types/searchRequest';
import { coachEndpoints } from '../types/coach-endpoints.interface';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http: HttpClient) { }

  // Retrieve all products
  getCoachs(searchRequest:SerachRequest): Observable<SerachResult<Coach>> {
    return this.http.get<SerachResult<Coach>>(coachEndpoints.findAll,{params: {page : searchRequest.page,limit:searchRequest.limit}});
  }

  // Retrieve a single product by ID
  getCoachById(coachId: number): Observable<Coach> {
    return this.http.get<Coach>(coachEndpoints.findById+coachId.toString());
  }

  // Add a new product
  addCoach(coach: Coach): Observable<Coach> {
    return this.http.post<Coach>(coachEndpoints.add, coach);
  }

  // Update an existing product
  updateCoach(coachId: number, updatedCoach: Coach): Observable<Coach> {
    return this.http.put<Coach>(coachEndpoints.update+coachId.toString(), updatedCoach);
  }

  // Delete a product
  deleteCoach(coachId: number): Observable<void> {
 
    return this.http.delete<void>(coachEndpoints.delete+coachId.toString());
  }
}
