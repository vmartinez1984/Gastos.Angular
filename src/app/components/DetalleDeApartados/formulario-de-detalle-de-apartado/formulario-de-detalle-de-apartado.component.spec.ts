import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeDetalleDeApartadoComponent } from './formulario-de-detalle-de-apartado.component';

describe('FormularioDeDetalleDeApartadoComponent', () => {
  let component: FormularioDeDetalleDeApartadoComponent;
  let fixture: ComponentFixture<FormularioDeDetalleDeApartadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeDetalleDeApartadoComponent]
    });
    fixture = TestBed.createComponent(FormularioDeDetalleDeApartadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
