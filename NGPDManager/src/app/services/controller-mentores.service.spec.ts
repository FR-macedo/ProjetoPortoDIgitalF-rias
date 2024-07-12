import { TestBed } from '@angular/core/testing';

import { ControllerMentoresService } from './controller-mentores.service';

describe('ControllerMentoresService', () => {
  let service: ControllerMentoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerMentoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
