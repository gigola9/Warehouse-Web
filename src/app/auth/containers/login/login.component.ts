import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorText = '';
  loginForm!: FormGroup;

  constructor(private authService: AuthService, ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      nick: new FormControl({ value: '', disabled: false }, Validators.required),
      pass: new FormControl({ value: '', disabled: false }, Validators.required)
    });

    this.authService.getErrorText().subscribe(m => {
      if (m) {
        this.errorText = m;
      } else {
        m = '';
      }
    })
  }

  login() {
    this.authService.login(this.loginForm.controls.nick.value, this.loginForm.controls.pass.value);
  }
}
