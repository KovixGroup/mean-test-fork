import {Component, View, Inject} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import {User} from '../../services/user.client.model';


@Component({
    selector: 'user-signin'
})

@View({
   directives: [RouterLink],
   templateUrl: '/src/client/modules/users/components/user-signin/user-signin.client.view.html'
})

export class UserSignin { 
    authentication:any = {};
    error: string;
    credentials:any;
    
    constructor( public user: User){
        this.authentication = {};
        this.authentication.user = false;
    }
    
    signin(isValid) {
      this.error = null;
      this.user.signin(
          this.credentials,
          credentials =>  console.log(credentials), //$state.go($state.previous.state.name || 'home', $state.previous.params),
          error => this.error = error
       );
    
    };
}
