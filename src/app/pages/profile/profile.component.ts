// src/app/pages/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  maskedPassword: string = '';
  menuOpen = false;

  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }



  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      (profile) => {
        if (profile) {
          this.userProfile = profile;
          console.log('Perfil del usuario:', profile);
        } else {
          console.log('No hay un usuario autenticado.');
        }
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }
}
