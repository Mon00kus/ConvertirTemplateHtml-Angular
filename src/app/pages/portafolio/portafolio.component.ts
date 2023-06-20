import { Component, OnInit } from '@angular/core';
import { InfoSiteService } from 'src/app/services/info-site.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public infoSiteService : InfoSiteService
            , public productosService : ProductosService) {

  }

  ngOnInit() {
  }

}
