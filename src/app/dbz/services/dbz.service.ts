import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    
    private _personajes :Personaje[] = [
        {
          nombre: 'Krillin', poder: 7000
        },
        {
          nombre: 'Goku', poder: 14000
        },
        {
          nombre: 'Vegeta', poder: 12000
        }
    ];

    get personajes() :Personaje[] {
        return [...this._personajes];
    }

    constructor() { }

    agregarPersonaje(personaje : Personaje) {
        this._personajes.push(personaje);
    }
}