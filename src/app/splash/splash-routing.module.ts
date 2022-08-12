import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FeaturesComponent } from './pages/features/features.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { WhatsNewComponent } from './pages/whats-new/whats-new.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'features',
        component: FeaturesComponent,
      },
      {
        path: 'pricing',
        component: PricingComponent,
      },
      {
        path: 'whats-new',
        component: WhatsNewComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },

      // {
      //   path: "",
      //   redirectTo: "home",
      //   pathMatch: "full",
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashRoutingModule {}
