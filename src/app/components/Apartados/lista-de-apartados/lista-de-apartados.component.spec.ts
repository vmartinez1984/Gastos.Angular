import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeApartadosComponent } from './lista-de-apartados.component';

describe('ListaDeApartadosComponent', () => {
  let component: ListaDeApartadosComponent;
  let fixture: ComponentFixture<ListaDeApartadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeApartadosComponent]
    });
    fixture = TestBed.createComponent(ListaDeApartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
