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
var menus_client_service_1 = require('../services/menus.client.service');
var MainMenuComp = (function () {
    function MainMenuComp(MenusService) {
        console.log("construct Main Menu");
        this.menu = MenusService.getMenu('topbar');
    }
    MainMenuComp = __decorate([
        angular2_1.Component({
            selector: 'main-menu'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink],
            templateUrl: '/src/core/client/main-menu/main-menu.client.view.html'
        }), 
        __metadata('design:paramtypes', [menus_client_service_1.MenusService])
    ], MainMenuComp);
    return MainMenuComp;
})();
exports.MainMenuComp = MainMenuComp;
