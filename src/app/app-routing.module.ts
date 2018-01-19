import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableTestComponent } from '../pages/observable-test/observable-test.component';


const routes1: Routes = [
  {
    path: '',
    children: []
  },
  {path: 'Observable', component: ObservableTestComponent },
   {path: 'MyObserver', loadChildren: '../pages/my-observer/my-observer.module#MyObserverModule'},
   {path: 'MyobeserverRedirect', pathMatch: 'full', redirectTo: 'MyObserver'}
];
export const routes = routes1;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
