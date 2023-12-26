import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
// @ts-ignore
import {UserService} from "./user.service";
import {NgIf} from "@angular/common";
import {EmailService} from "../../email.service";

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

    constructor(public emailService: EmailService) {
        // Puedes acceder al email aquí
        const email = this.emailService.email;
        console.log('Email compartido:', email);
    }

  ngOnInit() {


  }
}
