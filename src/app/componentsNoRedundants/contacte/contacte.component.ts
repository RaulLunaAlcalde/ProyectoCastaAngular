import { Component } from '@angular/core';
import {UserService} from "../../componentsRedundants/menu/user.service";
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";

@Component({
  selector: 'app-contacte',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './contacte.component.html',
  styleUrl: './contacte.component.css'
})
export class ContactFormComponent {
  constructor(private userService: UserService) {}

  onSubmit(formData: any) {
    // Aquí deberías validar y procesar el formulario según tus necesidades

    // Luego, registras el usuario en el servicio
    //this.userService.registerUser(formData);

    // Estableces el nombre del usuario actual en el servicio
    //this.userService.setCurrentUser(formData.nombre);
  }
}
