// src/app/pages/reminders/reminder-new/reminder-new.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reminder-editor',
  templateUrl: './reminder-editor.component.html',
  styleUrls: ['./reminder-editor.component.css']
})
export class ReminderEditorComponent {
  reminderId: string = '';
  reminderData: any;
  menuOpen = false;
  reminderForm: FormGroup; 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  } 
  
 

  reminderTypes = [
    { value: 'cita_medica', label: 'Cita Médica' },
    { value: 'examen_medico', label: 'Examen Médico' },
    { value: 'autorizacion', label: 'Autorización' },
    { value: 'terapia', label: 'Terapia' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.reminderForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.maxLength(200)]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      tipo: ['', Validators.required] // Agregar tipo al formulario
    });
  }
  
  // Simulación: actualizar recordatorio
  onUpdateReminder() {
    if (this.reminderForm.valid) {
      alert('Funcionalidad de editar recordatorio no implementada.');
    }
  }
}

