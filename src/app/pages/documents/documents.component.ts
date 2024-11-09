import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  documents = [
    { id: 1, title: 'Documento 1', description: 'Descripción del documento 1', url: '/documents/1' },
    { id: 2, title: 'Documento 2', description: 'Descripción del documento 2', url: '/documents/2' },
    { id: 3, title: 'Documento 3', description: 'Descripción del documento 3', url: '/documents/3' },
    { id: 4, title: 'Documento 4', description: 'Descripción del documento 4', url: '/documents/4' }
  ];
  
}
