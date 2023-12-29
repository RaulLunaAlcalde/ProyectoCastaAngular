// cistella.component.ts
import { Component } from '@angular/core';
import { MenuComponent } from "../../componentsRedundants/menu/menu.component";
import { FooterComponent } from "../../componentsRedundants/footer/footer.component";
import { CarritoService } from "../../carrito.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-cistella',
  standalone: true,
  imports: [
    MenuComponent,
    FooterComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './cistella.component.html',
  styleUrl: './cistella.component.css'
})
export class CistellaComponent {
  productosEnCarrito: { nombre: string, cantidad: number, precio: number, imagen: string }[] = [];
  mostrarProductos: boolean = true;
  constructor(private carritoService: CarritoService) {
    this.productosEnCarrito = this.carritoService.obtenerCarrito();
  }

  retirarDelCarrito(producto: any) {
    const indice = this.productosEnCarrito.findIndex(p => p.nombre === producto.nombre);
    if (indice !== -1) {
      this.productosEnCarrito.splice(indice, 1);
    }
  }

  disminuirCantidad(producto: any) {
    const indice = this.productosEnCarrito.findIndex(p => p.nombre === producto.nombre);
    if (indice !== -1) {
      // Disminuir la cantidad, asegurándose de que no sea menor que 1
      this.productosEnCarrito[indice].cantidad = Math.max(1, this.productosEnCarrito[indice].cantidad - 1);
    }
  }

  actualizarCantidad(producto: any) {
    const indice = this.productosEnCarrito.findIndex(p => p.nombre === producto.nombre);
    if (indice !== -1) {
      // Asegúrate de que la cantidad no sea menor que 1
      this.productosEnCarrito[indice].cantidad = Math.max(1, this.productosEnCarrito[indice].cantidad);
    }
  }
  calcularPrecioTotal(): number {
    return this.productosEnCarrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }
  comprar() {
    // Limpia el carrito después de la compra
    this.carritoService.limpiarCarrito();
    this.mostrarProductos = false;
  }


}
