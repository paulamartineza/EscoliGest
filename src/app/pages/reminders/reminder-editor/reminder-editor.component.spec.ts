import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderEditorComponent } from './reminder-editor.component';

describe('ReminderEditorComponent', () => {
  let component: ReminderEditorComponent;
  let fixture: ComponentFixture<ReminderEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReminderEditorComponent]
    });
    fixture = TestBed.createComponent(ReminderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
