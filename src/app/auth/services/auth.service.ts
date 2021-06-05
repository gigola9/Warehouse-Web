import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from '../models/AuthModel';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginres!: LoginModel;
  errorText = new BehaviorSubject<string>('');


  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated(): boolean {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      return true;
    } else {
      return false;
    }
  }

  getErrorText(): Observable<string> {
    return this.errorText.asObservable();
  }

  getRole() {
    return localStorage.getItem('role') ? localStorage.getItem('role') : '';
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

  login(nick: string, pass: string) {
    this.http.post(`${environment.endpoint}/api/Auth/Login`, {
      nickname: nick,
      password: pass
    }).subscribe(
      (m: any)  => {
        this.loginres = m;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('role', this.loginres.role);
        localStorage.setItem('nickname', nick);
        localStorage.setItem('warehouse', this.loginres.warehouse);
        if (this.loginres.role === 'user') {
          this.router.navigateByUrl('/user')
        } else if (this.loginres.role === 'admin') {
          this.router.navigateByUrl('/admin')
        }
      },
      err => {
        this.errorText.next(err.error);
      }
    );
  }
}
