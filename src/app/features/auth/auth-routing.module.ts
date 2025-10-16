import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../core/constants/routes.consts';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const { LOGIN, SIGNUP, FORGOT_PASSWORD, LANDING_PAGE } = ROUTES;

const routes: Routes = [
  { path: LOGIN, component: LoginComponent },
  { path: SIGNUP, component: SignupComponent },
  { path: FORGOT_PASSWORD, component: ForgotPasswordComponent },
  { path: LANDING_PAGE, component: LandingPageComponent },
  { path: '', redirectTo: LANDING_PAGE, pathMatch: 'full' },
  { path: '**', redirectTo: LANDING_PAGE },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
