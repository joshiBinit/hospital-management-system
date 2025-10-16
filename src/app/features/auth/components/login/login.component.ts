import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { LoginFormService } from '../../services/loginForm/login-form-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form?: FormGroup;

  constructor(private loginFormService: LoginFormService) {}

  ngOnInit(): void {
    this.form = this.loginFormService.buildLoginForm();
  }

  getControl(controlName: string): FormControl {
    return this.form?.get(controlName) as FormControl;
  }

  onSubmit(): void {}
}
