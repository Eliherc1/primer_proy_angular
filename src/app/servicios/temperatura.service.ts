import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

const urlBase= 'https://api.openweathermap.org/data/2.5/weather' ;
const appId= 'a6fa0ece3d3019294675704c1f4036cc' ;

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo(ciudad: string , codigo: string) {
    const url = `${ urlBase }?q=${ ciudad },${ codigo }&lang=sp&units=metric&appid=${ appId }` ;

    return this.http.get(url);
  }
}
