import { TestBed } from '@angular/core/testing';

import { DetalleDeApartadoService } from './detalle-de-apartado.service';

describe('DetalleDeApartadoService', () => {
  let service: DetalleDeApartadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleDeApartadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
