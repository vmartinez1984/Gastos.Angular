import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeSubcategoriaComponent } from './formulario-de-subcategoria.component';

describe('FormularioDeSubcategoriaComponent', () => {
  let component: FormularioDeSubcategoriaComponent;
  let fixture: ComponentFixture<FormularioDeSubcategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDeSubcategoriaComponent]
    });
    fixture = TestBed.createComponent(FormularioDeSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
