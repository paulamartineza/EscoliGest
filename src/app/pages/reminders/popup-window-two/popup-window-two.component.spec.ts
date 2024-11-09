import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWindowTwoComponent } from './popup-window-two.component';

describe('PopupWindowTwoComponent', () => {
  let component: PopupWindowTwoComponent;
  let fixture: ComponentFixture<PopupWindowTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupWindowTwoComponent]
    });
    fixture = TestBed.createComponent(PopupWindowTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
