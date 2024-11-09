// src/app/pages/reminders/reminder-new/reminder-new.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reminder-new',
  templateUrl: './reminder-new.component.html',
  styleUrls: ['./reminder-new.component.css']
})
export class ReminderNewComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  } 
  
  reminderForm: FormGroup; 

  reminderTypes = [
    { value: 'cita_medica', label: 'Cita Médica' },
    { value: 'examen_medico', label: 'Examen Médico' },
    { value: 'autorizacion', label: 'Autorización' },
    { value: 'terapia', label: 'Terapia' }
  ];

  constructor(private fb: FormBuilder) {
    this.reminderForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      tipo: ['', Validators.required],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', Validators.maxLength(200)]
    });
  }

  onCreateReminder() {
    if (this.reminderForm.valid) {
      const reminderData = this.reminderForm.value;
      console.log('Recordatorio creado:', reminderData);
      this.reminderForm.reset(); // Limpia el formulario después de crear el recordatorio
    } else {
      console.log('Formulario no válido');
    }
  }
}
