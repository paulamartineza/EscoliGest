import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReminderService } from 'src/app/services/reminder.service';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  menuOpen = false;
  reminders: any[] = []; // Lista de recordatorios
  currentIndex = 0; // Índice del recordatorio actual
  selectedReminder: any = null; // Recordatorio seleccionado
  userId!: string; // ID del usuario autenticado

  constructor(
    private router: Router,
    private reminderService: ReminderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del usuario autenticado
    this.authService.getUserId().subscribe(userId => {
      if (userId) {
        this.userId = userId; // Guardar el ID del usuario
        this.loadReminders(userId); // Cargar los recordatorios iniciales
      }
    });

    // Escuchar actualizaciones de los recordatorios
    this.reminderService.onRemindersUpdated().subscribe(() => {
      if (this.userId) {
        this.loadReminders(this.userId); // Recargar los recordatorios
      }
    });
  }

  // Cargar los recordatorios del usuario autenticado
  loadReminders(userId: string) {
    this.reminderService.getUserReminders(userId).subscribe(reminders => {
      this.reminders = reminders;
      if (this.reminders.length > 0) {
        this.setCurrentReminder(); // Establecer el primer recordatorio
      }
    });
  }

  // Obtener el recordatorio actual
  get currentReminder() {
    return this.reminders[this.currentIndex];
  }

  // Configurar el recordatorio actual
  setCurrentReminder() {
    if (this.reminders.length > 0) {
      this.currentIndex = Math.max(0, Math.min(this.currentIndex, this.reminders.length - 1));
    }
  }

  previousReminder() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.setCurrentReminder();
    }
  }

  nextReminder() {
    if (this.currentIndex < this.reminders.length - 1) {
      this.currentIndex++;
      this.setCurrentReminder();
    }
  }

  isFirstReminder() {
    return this.currentIndex === 0;
  }

  isLastReminder() {
    return this.currentIndex === this.reminders.length - 1;
  }

  editReminder(reminder: any) {
    this.router.navigate(['/reminder-editor'], {
      queryParams: { nombre: reminder.nombre, fecha: reminder.fecha }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
