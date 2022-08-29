import { MaterialModule } from './../material/material.module';
import { GlobalLoaderComponent } from './components/global-loader/global-loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [GlobalLoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, GlobalLoaderComponent, MaterialModule],
})
export class SharedModule {}
