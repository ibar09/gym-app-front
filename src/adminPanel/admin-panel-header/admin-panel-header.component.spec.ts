import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelHeaderComponent } from './admin-panel-header.component';

describe('AdminPanelHeaderComponent', () => {
  let component: AdminPanelHeaderComponent;
  let fixture: ComponentFixture<AdminPanelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPanelHeaderComponent]
    });
    fixture = TestBed.createComponent(AdminPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
