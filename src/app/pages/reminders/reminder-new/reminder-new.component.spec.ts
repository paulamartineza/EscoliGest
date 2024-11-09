import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderNewComponent } from './reminder-new.component';

describe('ReminderNewComponent', () => {
  let component: ReminderNewComponent;
  let fixture: ComponentFixture<ReminderNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReminderNewComponent]
    });
    fixture = TestBed.createComponent(ReminderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
