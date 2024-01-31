import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-panel-header',
  templateUrl: './admin-panel-header.component.html',
  styleUrls: ['./admin-panel-header.component.scss']
})
export class AdminPanelHeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
