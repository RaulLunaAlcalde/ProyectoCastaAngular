import {Component} from '@angular/core';
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
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
    { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', imagen: 'assets/CastaEscudo.png', cantidad: 1 },
    { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', imagen: 'assets/CastaEscudo.png', cantidad: 1 },
    { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', imagen: 'assets/CastaEscudo.png', cantidad: 1 },
    // Agrega más productos si es necesario
  ];

  constructor(private router: Router) {}

  agregarACarrito(producto: Producto) {
    console.log(`Se agregaron ${producto.cantidad} de ${producto.nombre} a la cesta`);
    this.router.navigate(['/cistella']);
  }
}
