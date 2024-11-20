import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CalendarComponent } from './pages/reminders/calendar/calendar.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReminderNewComponent } from './pages/reminders/reminder-new/reminder-new.component';
import { ReminderEditorComponent } from './pages/reminders/reminder-editor/reminder-editor.component';
import { PopupWindowOneComponent } from './pages/reminders/popup-window-one/popup-window-one.component';
import { PopupWindowTwoComponent } from './pages/reminders/popup-window-two/popup-window-two.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'inicio', component: InicioComponent },
  {path: 'reminder-editor', component: ReminderEditorComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'popup-window-one', component: PopupWindowOneComponent},
  {path: 'popup-window-two', component: PopupWindowTwoComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'reminder-new', component: ReminderNewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
