import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { ReminderService } from 'src/app/services/reminder.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reminder-new',
  templateUrl: './reminder-new.component.html',
  styleUrls: ['./reminder-new.component.css']
})
export class ReminderNewComponent implements OnInit {
  reminderForm!: FormGroup;
  reminderTypes = [
    { value: 'cita_medica', label: 'Cita Médica' },
    { value: 'examen_medico', label: 'Examen Médico' },
    { value: 'medicamento', label: 'Medicamento' },
    { value: 'terapia', label: 'Terapia' },
    { value: 'otro', label: 'Otro' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private reminderService: ReminderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicializar el formulario con validaciones
    this.reminderForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  // Método para crear un nuevo recordatorio
  onCreateReminder(): void {
    if (this.reminderForm.valid) {
      const reminderData = this.reminderForm.value;

      // Obtener el ID del usuario autenticado
      this.authService.getUserId().pipe(first()).subscribe(
        (userId) => {
          if (userId) {
            // Agregar el ID del usuario al recordatorio
            const reminderWithUserId = { ...reminderData, userId };

            // Crear el recordatorio en Firebase
            this.reminderService.createReminder(reminderWithUserId)
              .then(() => {
                console.log('Recordatorio creado exitosamente');
                this.reminderForm.reset(); // Limpiar el formulario

                // Redirigir al calendario
                this.router.navigate(['/calendar']);
              })
              .catch((error) => {
                console.error('Error al crear el recordatorio:', error);
              });
          } else {
            console.error('Usuario no autenticado');
            alert('No se pudo obtener el ID del usuario. Usuario no autenticado.');
          }
        },
        (error) => {
          console.error('Error al obtener el ID del usuario:', error);
        }
      );
    } else {
      alert('Formulario no válido. Por favor, completa todos los campos requeridos.');
    }
  }
}
