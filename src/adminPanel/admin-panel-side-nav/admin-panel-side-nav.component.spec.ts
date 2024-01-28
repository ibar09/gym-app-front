import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelSideNavComponent } from './admin-panel-side-nav.component';

describe('AdminPanelSideNavComponent', () => {
  let component: AdminPanelSideNavComponent;
  let fixture: ComponentFixture<AdminPanelSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPanelSideNavComponent]
    });
    fixture = TestBed.createComponent(AdminPanelSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
