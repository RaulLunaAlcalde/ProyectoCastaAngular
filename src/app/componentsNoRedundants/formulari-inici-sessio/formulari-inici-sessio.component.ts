import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from "../../email.service";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

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

  constructor(public emailService: EmailService, private router: Router) {
    this.imagePath = 'assets/CastaEscudo.png'
  }

  onSubmit() {
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      // Validar las credenciales utilizando el servicio
      if (this.emailService.validateCredentials(this.email, this.password)) {
        // Credenciales correctas, redirigir a la página principal
        this.router.navigate(['/']);
      } else {
        // Credenciales incorrectas, mostrar un mensaje de error
        alert("Usuari o contrasenya incorrectes");
      }
    } else {
      // Mostrar un mensaje de error si algún campo está vacío
      alert("Siusplau, emplena tots els camps");
    }

    // Limpiar los campos después de validar
    this.email = '';
    this.password = '';
  }
}
