import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableTestComponent } from '../pages/observable-test/observable-test.component';
import { MySubjectComponent } from './my-subject/my-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableTestComponent,
    MySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
