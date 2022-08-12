import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WhatsNewComponent } from './pages/whats-new/whats-new.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashRoutingModule } from './splash-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturesComponent } from './pages/features/features.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ImagesLoadedDirective } from './pages/features/image-loaded.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    FeaturesComponent,
    PricingComponent,
    PricingComponent,
    WhatsNewComponent,
    ContactUsComponent,
    ImagesLoadedDirective,
  ],
  imports: [CommonModule, SplashRoutingModule, SharedModule],
})
export class SplashModule {}
