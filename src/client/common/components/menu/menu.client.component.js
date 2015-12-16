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
var menus_client_service_1 = require('../../services/menu-service/menus.client.service');
var Menu = (function () {
    //menu: MenuItem;
    function Menu(MenusService) {
        console.log("hola");
        this.menuid = "chau";
        // this.menu = MenusService.getMenu(this.menuid);
    }
    Menu = __decorate([
        angular2_1.Component({
            selector: 'mean-menu'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink],
            //template: 'HOLAAAAAAAAA'
            templateUrl: '/src/client/common/components/menu/menu.client.view.html'
        }), 
        __metadata('design:paramtypes', [menus_client_service_1.MenusService])
    ], Menu);
    return Menu;
})();
exports.Menu = Menu;
