import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AppComponent } from 'src/app/app.component';
import { GlobalApp } from 'src/app/common/global';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  icon=faUser;
  constructor (public app:GlobalApp)
  {
    
  }
}
