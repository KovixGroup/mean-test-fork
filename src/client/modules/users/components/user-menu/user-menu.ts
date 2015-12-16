import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import {User} from '../../services/user.client.model'

@Component({
    selector: 'usermenu'
})
@View({
   directives: [RouterLink],
   templateUrl: '/src/client/modules/users/components/user-menu/user-menu.client.view.html'
})
export class UserMenuComp { 
    authentication:any = {};
    loggedInUser:User = User.prototype.getCurrentUser();
    
    constructor(){
        debugger;
        this.authentication = {};
        this.authentication.user = false;
    }
    
}
