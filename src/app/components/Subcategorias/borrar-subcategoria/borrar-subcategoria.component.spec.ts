import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarSubcategoriaComponent } from './borrar-subcategoria.component';

describe('BorrarSubcategoriaComponent', () => {
  let component: BorrarSubcategoriaComponent;
  let fixture: ComponentFixture<BorrarSubcategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarSubcategoriaComponent]
    });
    fixture = TestBed.createComponent(BorrarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
