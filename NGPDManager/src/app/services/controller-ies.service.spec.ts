import { TestBed } from '@angular/core/testing';

import { ControllerIESService } from './controller-ies.service';

describe('ControllerIESService', () => {
  let service: ControllerIESService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerIESService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
