import {Component, View, Input} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import { MenusService, MenuItem } from '../../services/menu-service/menus.client.service';
import { Inject } from 'angular2/angular2';

@Component({
    selector: 'mean-menu'

})
@View({
   directives: [RouterLink],
   //template: 'HOLAAAAAAAAA'
   templateUrl: '/src/client/common/components/menu/menu.client.view.html'
})
export class Menu { 
    menuid:string;
    //menu: MenuItem;
    constructor(MenusService: MenusService ){
        console.log("hola");
        this.menuid="chau";
       // this.menu = MenusService.getMenu(this.menuid);
    }
}
