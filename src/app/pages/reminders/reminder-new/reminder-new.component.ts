import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';

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

  // Simulación: crear un nuevo recordatorio
  onCreateReminder(): void {
    if (this.reminderForm.valid) {
      alert('Funcionalidad de crear recordatorio no implementada.');
      this.reminderForm.reset(); // Limpiar el formulario

      // Redirigir al calendario
      this.router.navigate(['/calendar']);
    } else {
      alert('Formulario no válido. Por favor, completa todos los campos requeridos.');
    }
  }
}
