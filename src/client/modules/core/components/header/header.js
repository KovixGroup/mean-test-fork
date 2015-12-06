var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var main_menu_1 = require('../main-menu/main-menu');
var user_menu_1 = require('../user-menu/user-menu');
var HeaderComp = (function () {
    function HeaderComp() {
        //menu.collapse()
        //this.isCollapsed = menu.isCollapsed;
        this.myName = "Alice";
    }
    HeaderComp.prototype.toggleCollapsibleMenu = function () {
        //menu.toogleCollapse();
        //this.isCollapsed = menu.isCollapsed();
    };
    HeaderComp = __decorate([
        angular2_1.Component({
            selector: 'appheader'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink, user_menu_1.UserMenuComp, main_menu_1.MainMenuComp],
            templateUrl: '/src/core/client/header/header.client.view.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComp);
    return HeaderComp;
})();
exports.HeaderComp = HeaderComp;
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
