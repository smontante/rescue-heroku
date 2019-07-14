import { TestBed } from '@angular/core/testing';

import { PerdiemService } from './perdiem.service';

describe('PerdiemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerdiemService = TestBed.get(PerdiemService);
    expect(service).toBeTruthy();
  });
});
