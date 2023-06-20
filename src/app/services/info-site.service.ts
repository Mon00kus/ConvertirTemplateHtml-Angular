
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoSite } from '../interfaes/info-site.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InfoSiteService {

  info : InfoSite = {};

  cargada : boolean = false;

  equipo : any []  = [];

  constructor(private http: HttpClient ) {

    this.cargarInfo();

    this.cargarEquipo();

  }

  private cargarInfo(){
    //Leer el archivo json del data-site.json

    this.http.get('./assets/data/data-site.json')
      .subscribe( (resp : InfoSite) => {
        this.info = resp;
        this.cargada = true;
     });
  }

  private cargarEquipo(){
    this.http.get(environment.fireBaseUrl + 'Equipo.json')
    .subscribe( (resp : any) => { // es un arreglo
      this.equipo = resp;
      /* console.log( this.info ); */
      this.cargada = true;
   });
  }

}
