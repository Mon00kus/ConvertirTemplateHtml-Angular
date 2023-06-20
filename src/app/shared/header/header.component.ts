import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfoSiteService } from 'src/app/services/info-site.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoSiteService : InfoSiteService,
              private router : Router) {

  }

  ngOnInit() {
  }

  buscarProducto( txtTerminoBuscar : string ) {

      /* console.log(txtTerminoBuscar) */
      if (txtTerminoBuscar.length < 1) {
        return;
      }
      this.router.navigate(['search', txtTerminoBuscar]);
      
  }
}
