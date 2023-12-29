import {Component} from '@angular/core';
import {FooterComponent} from "../../componentsRedundants/footer/footer.component";
import {MenuComponent} from "../../componentsRedundants/menu/menu.component";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CarritoService} from "../../carrito.service";

// cataleg.component.ts
interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  cantidad: number;
  categoria: string;
  subcategoria: string;
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
    { nombre: 'Camiseta Larga', descripcion: 'Camiseta Larga', imagen: 'assets/CastaEscudo.png', precio: 14, cantidad: 1, categoria: "Camiseta", subcategoria: "Larga" },
    { nombre: 'Camiseta Corta', descripcion: 'Camiseta Corta', imagen: 'assets/CastaEscudo.png', precio: 12, cantidad: 1, categoria: "Camiseta", subcategoria: "Corta" },
    { nombre: 'Camiseta Tirantes', descripcion: 'Camiseta Tirantes', imagen: 'assets/CastaEscudo.png', precio: 6, cantidad: 1, categoria: "Camiseta", subcategoria: "Tirantes" },
    { nombre: 'Pantalones Largos', descripcion: 'Pantalones Largos', imagen: 'assets/CastaEscudo.png', precio: 18, cantidad: 1, categoria: "Pantalones", subcategoria: "Largos" },
    { nombre: 'Pantalones Cortos', descripcion: 'Pantalones Cortos', imagen: 'assets/CastaEscudo.png', precio: 10, cantidad: 1, categoria: "Pantalones", subcategoria: "Cortos" },
    { nombre: 'Pantalones Bermudas', descripcion: 'Pantalones Bermudas', imagen: 'assets/CastaEscudo.png', precio: 25, cantidad: 1, categoria: "Pantalones", subcategoria: "Bermudas" },
    // Agrega más productos si es necesario
  ];
  ordenSeleccionado: string = 'default';
  categorias: string[] = [];
  subcategorias: string[] = [];
  categoriaSeleccionada: string = 'Todas';

  constructor(private router: Router, private carritoService: CarritoService) {
    this.obtenerCategorias();
    this.obtenerSubcategorias();
    this.ordenarProductos();
  }

  agregarACarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito({ nombre: producto.nombre, cantidad: producto.cantidad, precio: producto.precio, imagen:producto.imagen });
  }

  validarCantidad(event: any) {
    const inputCantidad = event.target.value;

    // Verificar que la cantidad sea un número
    if (isNaN(inputCantidad) || inputCantidad <= 0) {
      // Si no es un número válido, puedes manejarlo como desees
      // Por ejemplo, puedes establecer la cantidad a 1 por defecto
      event.target.value = '1';
    }
  }cambiarOrden(orden: string) {
    this.ordenSeleccionado = orden;
    this.ordenarProductos();
  }

  ordenarProductos() {
    switch (this.ordenSeleccionado) {
      case 'precioAsc':
        this.productos.sort((a, b) => a.precio - b.precio);
        break;
      case 'precioDesc':
        this.productos.sort((a, b) => b.precio - a.precio);
        break;
      case 'alfabeticoAsc':
        this.productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'alfabeticoDesc':
        this.productos.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case 'categoria':
        this.productos.sort((a, b) => a.categoria.localeCompare(b.categoria) || a.subcategoria.localeCompare(b.subcategoria));
        break;
      default:
        // Orden por defecto (puedes ajustar según tus necesidades)
        this.productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
    }
  }

  obtenerCategorias() {
    this.categorias = Array.from(new Set(this.productos.map(producto => producto.categoria)));
  }

  obtenerSubcategorias() {
    this.subcategorias = Array.from(new Set(this.productos.map(producto => producto.subcategoria)));
  }
  filtrarPorCategoria() {
    this.ordenarProductos();
  }
}
