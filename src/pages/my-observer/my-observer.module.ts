import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { MyObserverComponent } from '../my-observer/my-observer.component';
import { ObservableTestComponent } from '../observable-test/observable-test.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : '', component: MyObserverComponent, pathMatch: 'full' },
      {path : 'obs', component: ObservableTestComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [MyObserverComponent, ObservableTestComponent]
})
export class MyObserverModule { }
