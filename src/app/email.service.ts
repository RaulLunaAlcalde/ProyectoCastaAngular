import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private _email: string = '';
  private _password: string = ''

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  getUser(email: string): string | null {
    // Lógica para obtener el usuario asociado al email desde localStorage
    // Devolverá null si no se encuentra el usuario
    return localStorage.getItem(email);
  }
  getPassword(password: string): string | null {
    // Lógica para obtener el usuario asociado al email desde localStorage
    // Devolverá null si no se encuentra el usuario
    return localStorage.getItem(password);
  }
  validateCredentials(email: string, password: string): boolean {
    const storedPassword = localStorage.getItem(email);
    if (storedPassword !== null && storedPassword === password) {
      this._email = email; // Establecer el email actual
      return true;
    }
    return false;
  }

  logOut(): void {
    // Limpiar las credenciales al cerrar sesión
    this._email = '';
    this._password = '';
  }

  isLoggedIn(): boolean {
    return this._email !== '';
  }
}
