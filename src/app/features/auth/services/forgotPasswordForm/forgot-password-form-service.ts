import { Injectable } from '@angular/core';
import { BaseFormBuilderService } from '../../../../core/services/BaseForm/base-form-builder-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordFormService extends BaseFormBuilderService {
  constructor(protected override fb: FormBuilder, private store: Store) {
    super(fb);
  }

  buildForgotPasswordForm(): FormGroup {
    const config = {
      email: ['', [Validators.required, Validators.email]],
    };

    return this.buildForm(config);
  }
}
