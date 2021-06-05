import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    let res = false;
    if (this.authService.getRole() === 'user') {
      res = false
      this.router.navigate(['user']);
    } else if (this.authService.getRole() === 'admin') {
      res = true;
    }
    return res;
  }

}
