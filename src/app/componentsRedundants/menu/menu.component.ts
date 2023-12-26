import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
// @ts-ignore
import {UserService} from "./user.service";
import {NgIf} from "@angular/common";

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
  // @ts-ignore
    currentUser: string | null;

  constructor(private userService: UserService) {}

  ngOnInit() {



  }
}
