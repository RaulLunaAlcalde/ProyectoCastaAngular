import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariProductesService {

  private productes: any[] = []
  private usuaris: any[] = []

  constructor() {
    //inicialitzar
    this.usuaris = [
      {username: 'Luca', email: 'lucayeray.andrade@institutvidreres.cat'},
      {username: 'Raul', email: 'raul.luna@institutvidreres.cat'},
      {username: 'Alex', email: 'alex.ramos@institutvidreres.cat'}
    ]
    this.productes = [
      {id: '1', product: 'camiseta',preu: '70€'},
      {id: '2', product: 'pantalons',preu: '40€'},
      {id: '3', product: 'equipacioCompleta',preu: '100€'},
      {id: '4', product: 'polo',preu: '50€'},
      {id: '5', product: 'pilotaFirmada',preu: '25€'},
      {id: '6', product: 'kitPetos',preu: '15€'},
      {id: '7', product: 'cantimplora',preu: '8€'},
      {id: '8', product: 'canyelleres',preu: '10€'}

    ]
  }
  addUser(usuari: any) {
    this.usuaris.push(usuari);
  }
  getUsers(): any[] {
    return this.usuaris;
  }
  getUserByUserName(nomUsuari: string): any {
    return this.usuaris.find(usuaris => usuaris.username === nomUsuari);
  }
  getAllProducts() {
    return this.productes;
  }
  getProductById(ID: string): any {
    return this.usuaris.find(productes => productes.product === ID);
  }
  addProduct(product: any) {
    this.productes.push(product);
  }


}
