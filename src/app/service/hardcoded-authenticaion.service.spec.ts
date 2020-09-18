import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticaionService } from './hardcoded-authenticaion.service';

describe('HardcodedAuthenticaionService', () => {
  let service: HardcodedAuthenticaionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthenticaionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
