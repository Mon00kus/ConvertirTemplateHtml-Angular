import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interfaes/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { InfoSite } from '../../interfaes/info-site.interface';
import { InfoSiteService } from 'src/app/services/info-site.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  InfoSite: InfoSite = {};
  id: string ='';

  constructor(public route : ActivatedRoute,
              public productoService : ProductosService,
              public infoSiteService : InfoSiteService ) {

     this.producto = {
      categoria: "",
      desc1: "",
      desc2: "",
      producto: "",
      resumen: "",
      subtitulo1: "",
      subtitulo2: ""
     };
     id : "";
  }

  ngOnInit() {
    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
            .subscribe( (producto: any) => {
              this.id = parametros['id'];
              this.producto = producto;
            });
    });
  }

}
