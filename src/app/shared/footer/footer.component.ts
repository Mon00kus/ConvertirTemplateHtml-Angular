import { Component, OnInit } from '@angular/core';
import { InfoSiteService } from 'src/app/services/info-site.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public infoSiteService : InfoSiteService) {

  }

  ngOnInit() {
  }

}
