import { TestBed } from '@angular/core/testing';

import { ForgotPasswordFormService } from './forgot-password-form-service';

describe('ForgotPasswordFormService', () => {
  let service: ForgotPasswordFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
