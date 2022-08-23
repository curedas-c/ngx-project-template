import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from './state.module';

const DECLARATIONS: any = [];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  RouterModule,
  LoadingBarModule,
  LoadingBarHttpClientModule,
  StateModule
];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODULES],
  exports: [...DECLARATIONS, ...MODULES]
})
export class CoreModule {}
