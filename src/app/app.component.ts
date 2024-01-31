import { Component } from '@angular/core';
import { createPopper } from '@popperjs/core';
import {NavigationEnd, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-app-front';

  shouldDisplayHeader: boolean = true;
  shouldDisplayFooter: boolean = true;
  shouldDisplayAdminPanel: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderFooterVisibility();
      }
    });
  }

  private updateHeaderFooterVisibility() {
    const currentRoute = this.router.url;

    // Specify the route where you want to hide the header and footer
    if (currentRoute.includes('/adminPanel') ){
      this.shouldDisplayAdminPanel=true;
      this.shouldDisplayHeader = false;
      this.shouldDisplayFooter = false;
    } else {
      this.shouldDisplayAdminPanel=false;
      this.shouldDisplayHeader = true;
      this.shouldDisplayFooter = true;
    }
  }

}
