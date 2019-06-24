import { TestBed } from '@angular/core/testing';

import { SharedScreenDefaultService } from './shared-screen-default.service';

describe('SharedScreenDefaultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedScreenDefaultService = TestBed.get(SharedScreenDefaultService);
    expect(service).toBeTruthy();
  });
});
