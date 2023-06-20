import { Component } from '@angular/core';

import { InfoSiteService } from './services/info-site.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public infoSiteService : InfoSiteService,
                public productosService : ProductosService){

    }
}
