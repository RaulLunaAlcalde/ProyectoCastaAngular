import { Component } from '@angular/core';
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";

@Component({
  selector: 'app-condicions',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './condicions.component.html',
  styleUrls: ['./condicions.component.css']
})
export class CondicionsComponent {

}
