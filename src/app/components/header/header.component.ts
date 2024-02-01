import { Component,OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AppComponent } from 'src/app/app.component';
import { GlobalApp } from 'src/app/common/global';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  icon=faUser;
  cartIcon=faCartShopping;
  decodedToken:any;
  constructor (public app:GlobalApp)
  {
    
  }
  ngOnInit(): void {
    const helper = new JwtHelperService();
      this.decodedToken=helper.decodeToken(localStorage.getItem('token') as string);
  }
}
