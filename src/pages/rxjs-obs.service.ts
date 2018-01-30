import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class RxjsObsService {
  http: Http;
  departmentsMock: Array<any>= [
    {depId: 1, name: '管理部', createdAt: new Date(), updatedAt: new Date()},
    {depId: 3, name: '事业部', createdAt: new Date(), updatedAt: new Date()},
    {depId: 2, name: '后勤部', createdAt: new Date(),  updatedAt: new Date()},
    {depId: 5, name: '开发部', createdAt: new Date(), updatedAt: new Date()},
    {depId: 4, name: '倒霉不', createdAt: new Date(),  updatedAt: new Date()}
  ];

  departmentMock: Department= {depId: 1, name: '管理部', createdAt: new Date(), updatedAt: new Date()};
  constructor() {

  }

  getUserInfo(objectId): Observable<Department> {
    return of(this.departmentMock);
  }

}
export interface Department {
  name: string;
  depId: number;
  createdAt: Date;
  updatedAt: Date;

}
