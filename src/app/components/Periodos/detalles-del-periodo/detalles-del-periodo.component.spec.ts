import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDelPeriodoComponent } from './detalles-del-periodo.component';

describe('DetallesDelPeriodoComponent', () => {
  let component: DetallesDelPeriodoComponent;
  let fixture: ComponentFixture<DetallesDelPeriodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDelPeriodoComponent]
    });
    fixture = TestBed.createComponent(DetallesDelPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
