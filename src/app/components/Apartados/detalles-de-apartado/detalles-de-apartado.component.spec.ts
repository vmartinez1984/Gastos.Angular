import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDeApartadoComponent } from './detalles-de-apartado.component';

describe('DetallesDeApartadoComponent', () => {
  let component: DetallesDeApartadoComponent;
  let fixture: ComponentFixture<DetallesDeApartadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDeApartadoComponent]
    });
    fixture = TestBed.createComponent(DetallesDeApartadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
