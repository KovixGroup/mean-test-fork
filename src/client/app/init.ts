
import {Component, View, bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import {HomeComp} from '../modules/core/components/home/home.client.component';
import {HeaderComp} from '../modules/core/components/header/header.client.component';
import {MenusService} from '../common/services/menu-service/menus.client.service'
@Component({
    selector: 'my-app'
})

@View({
templateUrl: '/src/client/app/layout.client.view.html',
directives: [RouterOutlet, RouterLink, HeaderComp]
})
@RouteConfig([
{ path: '/',    component: HomeComp,    as: 'Home' },
])

class AppComponent { }
bootstrap(AppComponent, [ROUTER_BINDINGS, HTTP_PROVIDERS, MenusService]);