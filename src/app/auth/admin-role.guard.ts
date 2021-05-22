import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(): boolean {
    let res = false;
    if (this.authService.getRole() === 'user') {
      res = false
    } else if (this.authService.getRole() === 'admin') {
      res = true
    }
    return res;
  }

}
