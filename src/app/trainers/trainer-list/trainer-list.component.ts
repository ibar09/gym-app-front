import { Component, OnInit } from '@angular/core';
import { Coach } from '../types/coach.interface';
import { SerachRequest } from 'src/app/common/types/searchRequest';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit   {
  coachs!:Coach[];
  metaData:any;
  searchRequest: SerachRequest;
  constructor(private coachService:CoachService)
  {
    this.searchRequest={page:1,limit:10};
  }
  ngOnInit(): void {
    
    this.coachService.getCoachs(this.searchRequest).subscribe(
      (result)=>{
        this.coachs=result.items;
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
    this.coachService.getCoachs(this.searchRequest).subscribe(
      (result)=>{
        this.coachs=result.items;
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
