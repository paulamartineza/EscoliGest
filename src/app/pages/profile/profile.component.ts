// src/app/pages/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    // Simulación: no hay perfil de usuario
    this.userProfile = null;
  }
}
