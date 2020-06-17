import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.message = '';

    this.loginForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(): boolean {
    this.message = '';
    if (!this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    } 

    return false;
  }

  logout(): boolean {
    this.authService.logout();
    
    return false;
  }
}