import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import { MenusService, MenuItem } from '../services/menus.client.service';
import { Inject } from 'angular2/angular2';

@Component({
    selector: 'main-menu'
})
@View({
   directives: [RouterLink],
   templateUrl: '/src/core/client/main-menu/main-menu.client.view.html'
})
export class MainMenuComp { 
    menu: MenuItem;
    constructor(MenusService: MenusService ){
        console.log("construct Main Menu");
        this.menu = MenusService.getMenu('topbar');
    }
}
