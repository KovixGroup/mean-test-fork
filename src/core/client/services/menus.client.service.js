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
var User = (function () {
    function User() {
    }
    return User;
})();
var MenuItem = (function () {
    function MenuItem(options) {
        // Define a set of default roles
        this.defaultRoles = ['user', 'admin'];
        this.title = options.title || '';
        this.state = options.state || '';
        this.type = options.type || 'item';
        this.class = options.class || null;
        this.roles = ((options.roles === null || typeof options.roles === 'undefined') ? this.defaultRoles : options.roles);
        this.position = options.position || 0;
        this.items = options.items || [];
    }
    MenuItem.prototype.shouldRender = function (user) {
        if (!!~this.roles.indexOf('*')) {
            return true;
        }
        else {
            if (!user) {
                return false;
            }
            for (var userRoleIndex in user.roles) {
                for (var roleIndex in this.roles) {
                    if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
                        return true;
                    }
                }
            }
        }
    };
    MenuItem.prototype.addMenuItem = function (menuItem) {
        // Push new menu item
        this.items.push(menuItem);
    };
    MenuItem.prototype.addSubMenuItem = function (parentItemState, options) {
        options = options || {};
        // Search for menu item
        for (var itemIndex in this.items) {
            if (this.items[itemIndex].state === parentItemState) {
                // Push new submenu item
                this.items[itemIndex].addMenuItem(new MenuItem(options));
            }
        }
    };
    MenuItem.prototype.removeMenuItem = function (menuItemState) {
        // Search for menu item to remove
        for (var itemIndex in this.items) {
            if (this.items[itemIndex].state === menuItemState) {
                this.items.splice(itemIndex, 1);
            }
        }
    };
    MenuItem.prototype.removeSubMenuItem = function (submenuItemState) {
        // Search for menu item to remove
        for (var itemIndex in this.items) {
            for (var subitemIndex in this.items[itemIndex].items) {
                if (this.items[itemIndex].items[subitemIndex].state === submenuItemState) {
                    this.items[itemIndex].items.splice(subitemIndex, 1);
                }
            }
        }
    };
    return MenuItem;
})();
exports.MenuItem = MenuItem;
var MenusService = (function () {
    function MenusService() {
        // Define the menus object
        this.menus = {};
    }
    // Validate menu existance
    MenusService.prototype.validateMenuExistance = function (menuId) {
        if (menuId && menuId.length) {
            if (this.menus[menuId]) {
                return true;
            }
            else {
                throw new Error('Menu does not exist');
            }
        }
        else {
            throw new Error('MenuId was not provided');
        }
        return false;
    };
    ;
    // Get the menu object by menu id
    MenusService.prototype.getMenu = function (menuId) {
        // Validate that the menu exists
        this.validateMenuExistance(menuId);
        // Return the menu object
        return this.menus[menuId];
    };
    ;
    // Add new menu object by menu id
    MenusService.prototype.addMenu = function (menuId, options) {
        options = options || {};
        // Create the new menu
        this.menus[menuId] = new MenuItem(options);
        // Return the menu object
        return this.menus[menuId];
    };
    ;
    // Remove existing menu object by menu id
    MenusService.prototype.removeMenu = function (menuId) {
        // Validate that the menu exists
        this.validateMenuExistance(menuId);
        // Return the menu object
        delete this.menus[menuId];
    };
    ;
    // Add menu item object
    MenusService.prototype.addMenuItem = function (menuId, options) {
        options = options || {};
        // Validate that the menu exists
        this.validateMenuExistance(menuId);
        // Push new menu item
        this.menus[menuId].addMenuItem(options);
        // Add submenu items
        if (options.items) {
            for (var i in options.items) {
                this.addSubMenuItem(menuId, options.state, options.items[i]);
            }
        }
        // Return the menu object
        return this.menus[menuId];
    };
    MenusService.prototype.addSubMenuItem = function (menuId, parentItemState, options) {
        options = options || {};
        // Validate that the menu exists
        this.validateMenuExistance(menuId);
        // Search for menu item
        this.menus[menuId].addSubMenuItem(parentItemState, options);
        // Return the menu object
        return this.menus[menuId];
    };
    ;
    // Remove existing menu object by menu id
    MenusService.prototype.removeMenuItem = function (menuId, menuItemState) {
        // Validate that the menu exists
        this.validateMenuExistance(menuId);
        this.menus[menuId].removeMenuItem(menuItemState);
        // Return the menu object
        return this.menus[menuId];
    };
    ;
    // Remove existing menu object by menu id
    MenusService.prototype.removeSubMenuItem = function (menuId, submenuItemState) {
        // Validate that the menu exists
        this.validateMenuExistance(menuId);
        this.menus[menuId].removeSubMenuItem(submenuItemState);
        // Return the menu object
        return this.menus[menuId];
    };
    ;
    MenusService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MenusService);
    return MenusService;
})();
exports.MenusService = MenusService;
;
