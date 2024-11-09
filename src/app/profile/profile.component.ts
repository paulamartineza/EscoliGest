import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Nombre del Usuario',
    email: 'usuario@example.com',
    phone: '123456789',
    role: 'paciente',
    password: '******'
  };

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/inicio']); // Cambia '/inicio' según la ruta de inicio en tu aplicación
  }

  saveChanges() {
    // Lógica para guardar los cambios, como enviar los datos a un servidor
    console.log('Cambios guardados:', this.user);
    alert('Cambios guardados con éxito');
  }
}
