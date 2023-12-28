import { Component, OnInit } from '@angular/core';
import { EmailService } from "../../email.service";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(public emailService: EmailService) {}

  ngOnInit() {}

  logOut(): void {
    // Llamar al método logOut del servicio al hacer clic en el botón de cierre de sesión
    this.emailService.logOut();
  }
}
