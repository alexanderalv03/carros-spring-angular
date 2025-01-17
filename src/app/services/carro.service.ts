import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/carro";

  constructor() { }

  listAll(): Observable <Carro[]>{

    return this.http.get<Carro[]>(this.API+"/listAll");

  }

}
