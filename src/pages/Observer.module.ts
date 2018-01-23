import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { MyObserverComponent } from '../pages/my-observer/my-observer.component';
import { MySubjectComponent } from '../pages/my-subject/my-subject.component';
import { MySubject001Component } from '../pages/my-subject-001/my-subject-001.component';
import { RxjsObsService } from './rxjs-obs.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : '', component: MyObserverComponent, pathMatch: 'full' },
      {path : 'MySubject',
        children: [
          {path : '', component: MySubjectComponent, pathMatch: 'full' },
          {path : ':id',
            children: [
              {path : 'MySubject001', component: MySubject001Component, pathMatch: 'full'}
            ]
          }
        ]
      },
    ])
  ],
  declarations: [MyObserverComponent, MySubjectComponent, MySubject001Component],
  providers: [RxjsObsService]
})
export class ObserverModule { }
