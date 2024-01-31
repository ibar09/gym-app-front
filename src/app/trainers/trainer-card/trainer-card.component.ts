import { Component, Input, OnInit } from '@angular/core';
import { Coach } from '../types/coach.interface';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {
  @Input() coach!:Coach;
  constructor(private coachservice:CoachService)
  { }
  ngOnInit(): void {}
}
