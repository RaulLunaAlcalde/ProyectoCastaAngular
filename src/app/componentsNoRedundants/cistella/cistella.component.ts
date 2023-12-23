import { Component } from '@angular/core';
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";

@Component({
  selector: 'app-cistella',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './cistella.component.html',
  styleUrl: './cistella.component.css'
})
export class CistellaComponent {

}
