import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashRoutingModule } from './splash-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ImpactComponent } from './components/impact/impact.component';
import { BurdenComponent } from './components/burden/burden.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { SocialsComponent } from './components/socials/socials.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutComponent,
    ImpactComponent,
    BurdenComponent,
    RegisterComponent,
    LoginComponent,
    VerifyComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AuthLayoutComponent,
    SocialsComponent,
  ],
  imports: [CommonModule, SplashRoutingModule, SharedModule],
})
export class SplashModule {}
