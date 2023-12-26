import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-formulari',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './formulari.component.html',
  styleUrl: './formulari.component.css'
})
export class FormulariComponent {
  imagePath: string
  users: string[] = [];
  username: string = '';

  constructor() {
    this.imagePath = 'assets/CastaEscudo.png'
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = storedUsers.split(',');
    }
  }

  onUsernameChange() {
    if (this.username.trim() !== '') {
      this.users.push(this.username);
      this.updateLocalStorage();
    }
    this.username = '';
  }

  private updateLocalStorage() {
    localStorage.setItem('users', this.users.join(','));
  }

}
