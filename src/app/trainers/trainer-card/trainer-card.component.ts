import { Component, Input, OnInit } from '@angular/core';
import { Coach } from '../types/coach.interface';
import { CoachService } from '../services/coach.service';
import { GlobalApp } from 'src/app/common/global';
import { Router } from '@angular/router';

@Component({
  selector: 'trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {
  @Input() coach!:Coach;
  constructor(private coachservice:CoachService,
    private app:GlobalApp,
    private router:Router)
  { }
  ngOnInit(): void {}
  
  viewDetails() {
    this.router.navigate(['coachdetails', this.coach.id]);
  }
}
