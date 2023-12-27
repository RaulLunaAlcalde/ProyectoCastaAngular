// carrito.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: { nombre: string, cantidad: number, precio: number }[] = [];

  agregarAlCarrito(producto: { nombre: string, cantidad: number, precio: number }) {
    const indice = this.productos.findIndex(p => p.nombre === producto.nombre);

    if (indice !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      this.productos[indice].cantidad += producto.cantidad;
    } else {
      // Si el producto no está en el carrito, agrégalo
      this.productos.push(producto);
    }
  }

  obtenerCarrito() {
    return this.productos;
  }
}
