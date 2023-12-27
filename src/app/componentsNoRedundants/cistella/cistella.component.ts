import { Component } from '@angular/core';
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";
import {CarritoService} from "../../carrito.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cistella',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
    NgForOf
  ],
  templateUrl: './cistella.component.html',
  styleUrl: './cistella.component.css'
})
export class CistellaComponent {
  productosEnCarrito: { nombre: string, cantidad: number, precio: number }[] = [];

  constructor(private carritoService: CarritoService) {
    this.productosEnCarrito = this.carritoService.obtenerCarrito();
  }
}
