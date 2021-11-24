import { TestBed } from '@angular/core/testing';

import { FeedresponseService } from './feedresponse.service';

describe('FeedresponseService', () => {
  let service: FeedresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
