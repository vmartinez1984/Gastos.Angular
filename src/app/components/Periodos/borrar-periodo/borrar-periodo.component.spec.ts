import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPeriodoComponent } from './borrar-periodo.component';

describe('BorrarPeriodoComponent', () => {
  let component: BorrarPeriodoComponent;
  let fixture: ComponentFixture<BorrarPeriodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarPeriodoComponent]
    });
    fixture = TestBed.createComponent(BorrarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
