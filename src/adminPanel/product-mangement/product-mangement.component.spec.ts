import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMangementComponent } from './product-mangement.component';

describe('ProductMangementComponent', () => {
  let component: ProductMangementComponent;
  let fixture: ComponentFixture<ProductMangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMangementComponent]
    });
    fixture = TestBed.createComponent(ProductMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
