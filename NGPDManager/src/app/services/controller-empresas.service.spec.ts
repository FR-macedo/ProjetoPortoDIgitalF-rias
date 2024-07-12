import { TestBed } from '@angular/core/testing';

import { ControllerEmpresasService } from './controller-empresas.service';

describe('ControllerEmpresasService', () => {
  let service: ControllerEmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerEmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
