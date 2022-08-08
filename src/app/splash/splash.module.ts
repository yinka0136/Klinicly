import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashRoutingModule } from './splash-routing.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
  
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SplashRoutingModule, SharedModule
  ]
})
export class SplashModule { }
