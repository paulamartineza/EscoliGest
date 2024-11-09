import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-routing.module.ts',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class HomeComponent {
  esPreferido = true;
  desactivarHover = false;
}
