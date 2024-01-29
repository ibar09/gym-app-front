import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PychartComponent } from './pychart.component';

describe('PychartComponent', () => {
  let component: PychartComponent;
  let fixture: ComponentFixture<PychartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PychartComponent]
    });
    fixture = TestBed.createComponent(PychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
