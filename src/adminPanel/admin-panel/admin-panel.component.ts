import { Component } from '@angular/core';
import { createPopper } from '@popperjs/core';
import {NavigationEnd, Router} from "@angular/router";
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  blankPage: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.blankPaging();
      }
    });
  }
  private blankPaging() {
    const currentRoute = this.router.url;

    // Specify the route where you want to hide the header and footer
    if (currentRoute==='/adminPanel' ){
      this.blankPage=true;
    } else {
      this.blankPage = false;
    }
  }
}
