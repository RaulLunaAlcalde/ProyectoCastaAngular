import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor() {

  }

  @ViewChild('facebookIcon') facebookIcon!: ElementRef;
  @ViewChild('twitterIcon') twitterIcon!: ElementRef;
  @ViewChild('instagramIcon') instagramIcon!: ElementRef;

}

