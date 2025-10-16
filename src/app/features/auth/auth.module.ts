import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MaterialModule } from '../../shared/material/material.module';
import { AUTH_SELECTOR_KEY } from './store/auth.selectors';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared-module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    StoreModule.forFeature(AUTH_SELECTOR_KEY, authReducer),
    EffectsModule.forFeature(AuthEffects),
  ],
})
export class AuthModule {}
