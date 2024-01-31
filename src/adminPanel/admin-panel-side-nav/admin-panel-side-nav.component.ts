import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-panel-side-nav',
  templateUrl: './admin-panel-side-nav.component.html',
  styleUrls: ['./admin-panel-side-nav.component.css']
})
export class AdminPanelSideNavComponent {
  sidebarVisible: boolean = true;
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  }





