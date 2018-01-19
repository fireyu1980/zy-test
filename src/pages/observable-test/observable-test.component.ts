import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent  {

  tags: any[] = [];
  authHeaders = new Headers();
  host = 'http://cloud.yourdomain.com/api';
  constructor() {
    //  private http: Http
    // this.findTagList();
  }

  findTagList() {
  // 设置http请求头部参数
  this.authHeaders.append('X-Parse-Application-Id', 'cloud.api=');
  const url = this.host + '/classes/Tag';
  // 发起GET请求
  }
}
