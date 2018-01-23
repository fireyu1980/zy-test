import { TestBed, inject } from '@angular/core/testing';

import { RxjsObsService } from './rxjs-obs.service';

describe('RxjsObsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsObsService]
    });
  });

  it('should be created', inject([RxjsObsService], (service: RxjsObsService) => {
    expect(service).toBeTruthy();
  }));
});
