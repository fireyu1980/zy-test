import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { Page404Component } from './page-404/page-404.component';
import { ObservableTest1Component } from './observable-test1/observable-test1.component';


@NgModule({
  declarations: [
    AppComponent,
    ObservableTestComponent,
    Page404Component,
    ObservableTest1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
