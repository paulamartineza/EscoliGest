import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-window-one',
  templateUrl: './popup-window-one.component.html',
  styleUrls: ['./popup-window-one.component.css']
})
export class PopupWindowOneComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
