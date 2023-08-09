import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeApartadoComponent } from './formulario-de-apartado.component';

describe('FormularioDeApartadoComponent', () => {
  let component: FormularioDeApartadoComponent;
  let fixture: ComponentFixture<FormularioDeApartadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeApartadoComponent]
    });
    fixture = TestBed.createComponent(FormularioDeApartadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
