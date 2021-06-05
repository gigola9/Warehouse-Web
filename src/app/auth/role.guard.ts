import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    let res = false;
    if (this.authService.getRole() === 'user') {
      res = true
    } else if (this.authService.getRole() === 'admin') {
      res = false;
      this.router.navigate(['admin']);
    }
    return res;
  }
}
