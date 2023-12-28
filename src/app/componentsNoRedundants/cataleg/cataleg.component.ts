import {Component} from '@angular/core';
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CarritoService} from "../../carrito.service";

interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  cantidad: number;
}
@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [
    FooterComponent,
    MenuComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.css',
})
export class CatalegComponent {
  productos: Producto[] = [
    { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', imagen: 'assets/CastaEscudo.png', precio: 14, cantidad: 1 },
    { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', imagen: 'assets/CastaEscudo.png', precio: 12, cantidad: 1 },
    { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', imagen: 'assets/CastaEscudo.png', precio: 6, cantidad: 1 },
    { nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', imagen: 'assets/CastaEscudo.png', precio: 18, cantidad: 1 },
    { nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', imagen: 'assets/CastaEscudo.png', precio: 10, cantidad: 1 },
    { nombre: 'Producto 6', descripcion: 'Descripción del Producto 6', imagen: 'assets/CastaEscudo.png', precio: 25, cantidad: 1 },
    // Agrega más productos si es necesario
  ];

  constructor(private router: Router, private carritoService: CarritoService) {}

  agregarACarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito({ nombre: producto.nombre, cantidad: producto.cantidad, precio: producto.precio });
  }

  validarCantidad(event: any) {
    const inputCantidad = event.target.value;

    // Verificar que la cantidad sea un número
    if (isNaN(inputCantidad) || inputCantidad <= 0) {
      // Si no es un número válido, puedes manejarlo como desees
      // Por ejemplo, puedes establecer la cantidad a 1 por defecto
      event.target.value = '1';
    }
  }
}
