// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Check if there is a token in local storage
    if (localStorage.getItem('token')) {
      return true;
    } else {
      // If no token, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
