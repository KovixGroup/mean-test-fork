import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';

@Component({
    selector: 'usermenu'
})
@View({
   directives: [RouterLink],
   templateUrl: '/src/core/client/user-menu/user-menu.client.view.html'
})
export class UserMenuComp { 
    authentication:any = {};
    constructor(){
        this.authentication = {};
        this.authentication.user = false;
    }
}
