import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { Page404Component } from './page-404/page-404.component';
import { ObservableTest1Component } from './observable-test1/observable-test1.component';

const routes1: Routes = [
  {
    path: '',
    children: []
  },
  {path: 'Observable', component: ObservableTestComponent },
 // {path: 'MySubject', component: MySubjectComponent, outlet: 'MySubject1' },
   {path: 'Observer', loadChildren: '../pages/observer.module#ObserverModule'},
   {path: 'MyObeserverRedirect', pathMatch: 'full', redirectTo: 'Observer'},
   // {path: '**', component: Page404Component }
];

// 配置路由数组
const rootRouterConfig: Routes = [
  {
    path: '',
    children: []
  },
  {path: 'ObservableTest', outlet: 'test', component: ObservableTestComponent },
  {path: 'ObservableTest', outlet: 'test1', component: ObservableTest1Component }
];
export const routes = routes1;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
