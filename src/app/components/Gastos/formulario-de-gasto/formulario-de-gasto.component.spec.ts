import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeGastoComponent } from './formulario-de-gasto.component';

describe('FormularioDeGastoComponent', () => {
  let component: FormularioDeGastoComponent;
  let fixture: ComponentFixture<FormularioDeGastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeGastoComponent]
    });
    fixture = TestBed.createComponent(FormularioDeGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
