import { TestBed } from '@angular/core/testing';

import { BoxyardService } from './boxyard.service';

describe('BoxyardService', () => {
  let service: BoxyardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxyardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
