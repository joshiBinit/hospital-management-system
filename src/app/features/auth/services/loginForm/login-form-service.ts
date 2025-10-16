import { Injectable } from '@angular/core';
import { BaseFormBuilderService } from '../../../../core/services/BaseForm/base-form-builder-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService extends BaseFormBuilderService {
  constructor(protected override fb: FormBuilder, private store: Store) {
    super(fb);
  }

  buildLoginForm(): FormGroup {
    const config = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    };

    return this.buildForm(config);
  }
}
