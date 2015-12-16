import {Component, View, Inject} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import {UserSignin} from './user-signin/user-signin.client.component';
import {UserSignup} from './user-signup/user-signup.client.component';
import {User} from '../../services/user.client.model';


@Component({
    selector: 'authentication'
})

@View({
   directives: [RouterLink],
   templateUrl: '/src/client/modules/users/components/authentication/authentication.client.view.html'
})

@RouteConfig([
{ path: '/User',    component: Authentication,    as: 'UserAuthentication' },
{ path: '/User/signin',    component: UserSignin,    as: 'UserSignin' },
{ path: '/User/signup',    component: UserSignup,    as: 'UserSignup' },
])

export class Authentication { 
    
    constructor(){
    }
    
    callOauthProvider(url) {
      /*if ($state.previous && $state.previous.href) {
        url += '?redirect_to=' + encodeURIComponent($state.previous.href);
      }

      // Effectively call OAuth authentication route:
      $window.location.href = url;*/
    };
  
}
