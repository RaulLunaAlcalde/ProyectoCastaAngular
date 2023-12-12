import { Component } from '@angular/core';

@Component({
  selector: 'app-formulari',
  standalone: true,
  imports: [],
  templateUrl: './formulari.component.html',
  styleUrl: './formulari.component.css'
})
export class FormulariComponent {
  imagePath: string
  constructor() {
    this.imagePath = 'assets/CastaEscudo.png'
  }
}
