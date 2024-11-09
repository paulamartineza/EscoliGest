import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWindowOneComponent } from './popup-window-one.component';

describe('PopupWindowOneComponent', () => {
  let component: PopupWindowOneComponent;
  let fixture: ComponentFixture<PopupWindowOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupWindowOneComponent]
    });
    fixture = TestBed.createComponent(PopupWindowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
