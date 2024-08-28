import { Component, OnInit } from '@angular/core';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  routes: any;
  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.routes = this.routeService.getRoutes().filter(route => route.path);
  }

}
