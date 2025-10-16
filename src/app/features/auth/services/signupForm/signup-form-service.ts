import { Injectable } from '@angular/core';
import { BaseFormBuilderService } from '../../../../core/services/BaseForm/base-form-builder-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class SignupFormService extends BaseFormBuilderService {
  constructor(protected override fb: FormBuilder, private store: Store) {
    super(fb);
  }

  buildSignupForm(): FormGroup {
    const config = {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    };

    return this.buildForm(config);
  }
}
