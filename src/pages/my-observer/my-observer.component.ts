import { Component, OnInit, OnDestroy} from '@angular/core';

import { RxjsObsService } from '../rxjs-obs.service';
import { fromEvent } from 'rxjs/observable/fromevent';

@Component({
  selector: 'app-my-observer',
  templateUrl: './my-observer.component.html',
  styleUrls: ['./my-observer.component.css']
})
export class MyObserverComponent implements OnInit {

  userInfo;
  constructor(private rxjsobsService: RxjsObsService) {
    // this.rxjsobsService.getUserInfo(1).subscribe(data => {
     // console.log(data);
   // });
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.userInfo = this.rxjsobsService.getUserInfo(1).subscribe(data => {
      console.log(data);
    });
    //var click = fromEvent(this, 'click');
  }

  getUserInfo() {
    this.rxjsobsService.getUserInfo(1).subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.userInfo.unsubscribe();
  }
}
