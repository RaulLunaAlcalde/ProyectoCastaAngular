import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    RouterLink,
    MenuComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  imagePath: string
  constructor() {
    this.imagePath = '../assets/CastaEscudo.png'
  }
}
