import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import {HomeComp} from '../home/home';

@Component({
    selector: 'my-app'
})

@View({
template: '<h1>My angular app</h1><router-outlet></router-outlet>',
directives: [RouterOutlet, RouterLink, HomeComp]
})
@RouteConfig([
{ path: '/', component: HomeComp },
])

class AppComponent { }
bootstrap(AppComponent, [ROUTER_BINDINGS]);