
import { Component } from '@angular/core';
import{CalendarEvent, CalendarView} from 'angular-calendar';
import { startOfDay, endOfDay, addMonths, subMonths, isSameDay} from 'date-fns';

interface Reminder {
  
  message: string;
  date?: Date;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  daysInMonth: Date[] = [];  
  selectedReminder: any = null;  
  menuOpen = false;
  activeDayIsOpen = false; 
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  selectedDate: Date | null = null; /*día seleccionado*/

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      title: 'Un evento importante',
      draggable: false,
      resizable: {
        beforeStart: false,
        afterEnd: false,
      },
    },
    {
      start: startOfDay(addMonths(new Date(), -1)),
      end: endOfDay(addMonths(new Date(), -1)),
      title: 'Evento del mes pasado',
      draggable: false,
      resizable: {
        beforeStart: false,
        afterEnd: false,
      },
    }
  ];

  filteredEvents: CalendarEvent[] = []; // Eventos filtrados para el día seleccionado

  setView(view: CalendarView) {
    this.view = view;
  }

  prevMonth() {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth() {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  dayClicked(day: Date) {
    this.selectedDate = day;
    this.filteredEvents = this.events.filter(event => isSameDay(event.start, day));
  }

  addEvent(title: string, date: Date) {
    this.events = [
      ...this.events,
      {
        title,
        start: startOfDay(date),
        end: endOfDay(date),
        draggable: false,
        resizable: {
          beforeStart: false,
          afterEnd: false,
        }
      }
    ];
  }

  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }



  closeOpenMonthViewDay(){
    this.activeDayIsOpen = false;
  }


  getRemindersForDate(day: Date): Reminder[] {
    // Aquí podrías obtener y devolver un array de recordatorios específicos para la fecha
    return [
      { message: "Recordatorio 1",  date: new Date() },
      { message: "Recordatorio 2",  date: new Date() }
    ];
  }

  selectDay(day: Date) {
    // Este método se llama cuando el usuario selecciona un día del calendario
    // Aquí podrías actualizar `selectedReminder` con el recordatorio para ese día
    this.selectedReminder = this.getRemindersForDate(day)[0] || null; // Ejemplo de asignación
  }


}