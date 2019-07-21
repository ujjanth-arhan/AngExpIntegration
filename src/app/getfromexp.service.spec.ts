import { TestBed } from '@angular/core/testing';

import { GetfromexpService } from './getfromexp.service';

describe('GetfromexpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetfromexpService = TestBed.get(GetfromexpService);
    expect(service).toBeTruthy();
  });
});
