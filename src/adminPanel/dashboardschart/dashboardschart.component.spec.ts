import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardschartComponent } from './dashboardschart.component';

describe('DashboardschartComponent', () => {
  let component: DashboardschartComponent;
  let fixture: ComponentFixture<DashboardschartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardschartComponent]
    });
    fixture = TestBed.createComponent(DashboardschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
