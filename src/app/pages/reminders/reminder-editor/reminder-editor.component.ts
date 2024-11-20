// src/app/pages/reminders/reminder-new/reminder-new.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ReminderService } from 'src/app/services/reminder.service';


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
    private route: ActivatedRoute,
    private reminderService: ReminderService
  ) {
    this.reminderForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.maxLength(200)]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      tipo: ['', Validators.required] // Agregar tipo al formulario
    });
  }
  
// ngOnInit() {
//   // Obtener el ID del recordatorio desde la URL
//   this.reminderId = this.route.snapshot.paramMap.get('id') || '';

//   // Recuperar datos del recordatorio desde Firebase
//   this.reminderService.getReminderById(this.reminderId).subscribe((data) => {
//     this.reminderData = data;

//     // Poblamos el formulario con los datos del recordatorio
//     this.reminderForm.patchValue(this.reminderData);
//   });
// }
// onUpdateReminder() {
//   if (this.reminderForm.valid) {
//     this.reminderService.updateReminder(this.reminderId, this.reminderForm.value)
//       .then(() => {
//         console.log('Recordatorio actualizado correctamente');
//       })
//       .catch((error) => {
//         console.error('Error al actualizar el recordatorio:', error);
//       });
//   } else {
//     console.log('Formulario no válido');
//   }
// }

  
}

  // onEditReminder() {
  //   if (this.reminderForm.valid) {
  //     const reminderData = this.reminderForm.value;
  //     console.log('Recordatorio creado:', reminderData);
  //     this.reminderForm.reset(); // Limpia el formulario después de crear el recordatorio
  //   } else {
  //     console.log('Formulario no válido');
  //   }
  // }

