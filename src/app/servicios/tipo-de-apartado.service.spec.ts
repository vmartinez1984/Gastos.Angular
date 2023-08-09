import { TestBed } from '@angular/core/testing';

import { TipoDeApartadoService } from './tipo-de-apartado.service';

describe('TipoDeApartadoService', () => {
  let service: TipoDeApartadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDeApartadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
