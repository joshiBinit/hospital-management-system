import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { selectError, selectLoading } from '../../store/auth.selectors';
import { Store } from '@ngrx/store';
import { ForgotPasswordFormService } from '../../services/forgotPasswordForm/forgot-password-form-service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  form?: FormGroup;

  constructor(private forgotPasswordForm: ForgotPasswordFormService) {}

  ngOnInit(): void {
    this.form = this.forgotPasswordForm.buildForgotPasswordForm();
  }

  getControl(controlName: string): FormControl {
    return this.form?.get(controlName) as FormControl;
  }

  onSubmit() {}
}
