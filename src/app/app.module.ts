import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';

const MODULES = [LoadingBarModule, LoadingBarHttpClientModule];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
