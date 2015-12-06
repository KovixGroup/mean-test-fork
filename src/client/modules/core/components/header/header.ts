import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink, ROUTER_BINDINGS } from 'angular2/router';
import { MainMenuComp } from '../main-menu/main-menu';
import { UserMenuComp } from '../user-menu/user-menu';

@Component({
    selector: 'appheader'
})
@View({
   directives: [RouterLink, UserMenuComp, MainMenuComp ],
   templateUrl: '/src/core/client/header/header.client.view.html'
})
export class HeaderComp { 
  
  myName: string;
  isCollapsed: boolean;
  
  constructor() {
    //menu.collapse()
    //this.isCollapsed = menu.isCollapsed;
    this.myName = "Alice";
  }
  
  toggleCollapsibleMenu(){
    //menu.toogleCollapse();
    //this.isCollapsed = menu.isCollapsed();
  }

}
/*
angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus',
  function ($scope, $state, Authentication, Menus) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);
*/