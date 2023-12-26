// user.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// @ts-ignore
import {constructor} from "zone.js";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(){
    this.grabar_localstorage()
  }
  grabar_localstorage(){

    let nombre:string = "RAUL"

    let persona = {
      nombre: "Juan",
      edad: 18
    }
  }

}

