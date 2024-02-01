import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMangementComponent } from './orders-mangement.component';

describe('OrdersMangementComponent', () => {
  let component: OrdersMangementComponent;
  let fixture: ComponentFixture<OrdersMangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersMangementComponent]
    });
    fixture = TestBed.createComponent(OrdersMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
