import { Component, OnInit } from '@angular/core';
import { InfoSiteService } from 'src/app/services/info-site.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoSiteService : InfoSiteService) { }

  ngOnInit() {
  }

}
