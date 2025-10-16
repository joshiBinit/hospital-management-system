import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignupFormService } from '../../services/signupForm/signup-form-service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  form?: FormGroup;

  constructor(private signupFormService: SignupFormService) {}

  ngOnInit(): void {
    this.form = this.signupFormService.buildSignupForm();
  }

  getControl(controlName: string): FormControl {
    return this.form?.get(controlName) as FormControl;
  }

  onSubmit(): void {}
}
