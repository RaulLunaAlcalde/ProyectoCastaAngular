import { Component } from '@angular/core';
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [
    FooterComponent,
    MenuComponent
  ],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.css'
})
export class CatalegComponent {

}
