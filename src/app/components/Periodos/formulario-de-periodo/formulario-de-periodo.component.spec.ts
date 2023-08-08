import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDePeriodoComponent } from './formulario-de-periodo.component';

describe('FormularioDePeriodoComponent', () => {
  let component: FormularioDePeriodoComponent;
  let fixture: ComponentFixture<FormularioDePeriodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDePeriodoComponent]
    });
    fixture = TestBed.createComponent(FormularioDePeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
