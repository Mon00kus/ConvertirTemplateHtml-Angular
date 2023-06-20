import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment'

import { ProductoInterface } from './../interfaes/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;
  productos : ProductoInterface[] = [];
  productosFiltrado : ProductoInterface[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
  
  return new Promise((resolve, reject)=>{
    this.http.get( environment.fireBaseUrl + 'Productos_idx.json')
        .subscribe( (resp: any) => {
          this.productos = resp;
          this.cargando = false;
        });
  })

  }

  getProducto( id: string ) {

    return this.http.get( environment.fireBaseUrl + `productos/${ id }.json`);

  }

  buscarProducto( termino: string ) {

    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }

  } 

  private filtrarProductos( termino: string ) {

     /* console.log(this.productos); */
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }


}
