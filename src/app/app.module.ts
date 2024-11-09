import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms'; // <-- Importa FormsModule
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CalendarComponent } from './pages/reminders/calendar/calendar.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CommonModule } from '@angular/common';
import { ReminderNewComponent } from './pages/reminders/reminder-new/reminder-new.component';
import{ ReminderEditorComponent} from'./pages/reminders/reminder-editor/reminder-editor.component';
import { PopupWindowOneComponent } from './pages/reminders/popup-window-one/popup-window-one.component';
import { PopupWindowTwoComponent } from './pages/reminders/popup-window-two/popup-window-two.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    DocumentsComponent,
    InicioComponent,
    ReminderNewComponent,
    ReminderEditorComponent,
    PopupWindowOneComponent,
    PopupWindowTwoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
