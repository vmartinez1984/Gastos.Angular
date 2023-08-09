import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarApartadoComponent } from './borrar-apartado.component';

describe('BorrarApartadoComponent', () => {
  let component: BorrarApartadoComponent;
  let fixture: ComponentFixture<BorrarApartadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarApartadoComponent]
    });
    fixture = TestBed.createComponent(BorrarApartadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
