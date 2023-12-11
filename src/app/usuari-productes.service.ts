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





}
