import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import {User} from '../../services/user.client.model'
@Component({
    selector: 'user-signup'
})
@View({
   directives: [RouterLink],
   templateUrl: '/src/client/modules/users/components/user-signup/user-signup.client.view.html'
})
export class UserSignup { 
    authentication:any = {};
    error: string;
    credentials: any;
    
    constructor(public user: User){
        this.authentication = {};
        this.authentication.user = false;
    }
    
    signup(isValid) {
      this.error = null;

      if (!isValid) {
         return false;
      }

      this.user.signup(
          credentials,
          response => console.log(response), //$state.go($state.previous.state.name || 'home', $state.previous.params)
          msg => this.error = msg;
      );
    }
      
}
