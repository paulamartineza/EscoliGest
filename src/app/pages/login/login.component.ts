import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing.module.ts',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/inicio']);
  }
}

