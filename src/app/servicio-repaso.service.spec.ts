import { TestBed } from '@angular/core/testing';

import { ServicioRepasoService } from './servicio-repaso.service';

describe('ServicioRepasoService', () => {
  let service: ServicioRepasoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRepasoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
