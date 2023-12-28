// Importa las clases necesarias
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MenuComponent } from "../../componentsRedundants/menu/menu.component";
import { FooterComponent } from "../../componentsRedundants/footer/footer.component";

@Component({
  selector: 'app-condicions',
  standalone: true,
  templateUrl: './condicions.component.html',
  styleUrls: ['./condicions.component.css'],
  imports: [
    MenuComponent,
    FooterComponent
  ]
})
export class CondicionsComponent {

  @ViewChild('bodyElement') bodyElement!: ElementRef;

  ngAfterViewInit() {
    console.log('Element del cos:', this.bodyElement.nativeElement);
  }
}

