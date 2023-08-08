import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeSubcategoriasComponent } from './lista-de-subcategorias.component';

describe('ListaDeSubcategoriasComponent', () => {
  let component: ListaDeSubcategoriasComponent;
  let fixture: ComponentFixture<ListaDeSubcategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeSubcategoriasComponent]
    });
    fixture = TestBed.createComponent(ListaDeSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
