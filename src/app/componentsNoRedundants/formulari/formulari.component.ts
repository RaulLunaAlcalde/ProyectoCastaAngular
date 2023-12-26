import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {EmailService} from "../../email.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-formulari',
  standalone: true,
    imports: [
        FormsModule,
        JsonPipe,
        RouterLink
    ],
  templateUrl: './formulari.component.html',
  styleUrl: './formulari.component.css'
})
export class FormulariComponent {
  imagePath: string
  email: string = '';
  password: string = '';

  constructor() {
    this.imagePath = 'assets/CastaEscudo.png'
  }
  onSubmit() {
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      // Guardar en localStorage usando el correo electrónico como clave
      localStorage.setItem(this.email, this.password);
    }
    // Limpiar los campos después de guardar
    this.email = '';
    this.password = '';
  }



}
