import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-window-two',
  templateUrl: './popup-window-two.component.html',
  styleUrls: ['./popup-window-two.component.css']
})
export class PopupWindowTwoComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
