import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import {HomeComp} from '../home/home';
import {HeaderComp} from '../header/header';
import {MenusService} from '../services/menus.client.service'
@Component({
    selector: 'my-app'
})

@View({
templateUrl: '/src/core/client/app/layout.client.view.html',
directives: [RouterOutlet, RouterLink, HeaderComp]
})
@RouteConfig([
{ path: '/',    component: HomeComp,    as: 'Home' },
])

class AppComponent { }
bootstrap(AppComponent, [ROUTER_BINDINGS, MenusService]);