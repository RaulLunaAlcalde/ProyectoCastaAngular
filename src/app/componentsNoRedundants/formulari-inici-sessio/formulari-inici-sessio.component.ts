import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {EmailService} from "../../email.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulari-inici-sessio',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './formulari-inici-sessio.component.html',
  styleUrl: './formulari-inici-sessio.component.css'
})
export class FormulariIniciSessioComponent {
  imagePath: string
  email: string = '';
  password: string = '';
  constructor(public emailService : EmailService) {
    this.imagePath = 'assets/CastaEscudo.png'
  }
  onSubmit() {
    const user = this.emailService.getUser(this.email);
    const password = this.emailService.getPassword(this.password)

    if (password == this.password) {
      // La combinación de email y contraseña es válida
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
