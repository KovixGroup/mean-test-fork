import { Injectable } from 'angular2/angular2';

class User {
  roles: string[]

}

export class MenuItem {
 
  // Define a set of default roles
  defaultRoles: string[] = ['user', 'admin'];
  
  // Declare MenuItem Properties
  title: string;
  state: string;
  type: string;
  class: string;
  roles: string[];
  position: number;
  items: any[];

  constructor(options) {
    this.title = options.title || '';
    this.state = options.state || '';
    this.type = options.type || 'item';
    this.class = options.class || null;
    this.roles = ((options.roles === null || typeof options.roles === 'undefined') ? this.defaultRoles : options.roles);
    this.position = options.position || 0;
    this.items = options.items || [];
  }

  shouldRender(user: User) {
    if (!!~this.roles.indexOf('*')) {
      return true;
    } else {
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
  }

  addMenuItem(menuItem:MenuItem) {

    // Push new menu item
    this.items.push(menuItem);

  }

  addSubMenuItem(parentItemState:string, options) {
    options = options || {};

    // Search for menu item
    for (var itemIndex in this.items) {
      if (this.items[itemIndex].state === parentItemState) {
        // Push new submenu item
        this.items[itemIndex].addMenuItem( new MenuItem(options));
      }
    }
  }
  
  removeMenuItem(menuItemState:string){
    // Search for menu item to remove
    for (var itemIndex in this.items) {
      if (this.items[itemIndex].state === menuItemState) {
        this.items.splice(itemIndex, 1);
      }
    }
  }
  
  removeSubMenuItem(submenuItemState:string){
    // Search for menu item to remove
      for (var itemIndex in this.items) {
        for (var subitemIndex in this.items[itemIndex].items) {
          if (this.items[itemIndex].items[subitemIndex].state === submenuItemState) {
            this.items[itemIndex].items.splice(subitemIndex, 1);
          }
        }
      }
  }
  
}

@Injectable()
export class MenusService {
  
  // Define the menus object
  menus: any = {};

  // Validate menu existance
  validateMenuExistance(menuId: string) {
    if (menuId && menuId.length) {
      if (this.menus[menuId]) {
        return true;
      } else {
        throw new Error('Menu does not exist');
      }
    } else {
      throw new Error('MenuId was not provided');
    }
    return false;
  };

  // Get the menu object by menu id
  public getMenu(menuId) {
    // Validate that the menu exists
    this.validateMenuExistance(menuId);
    // Return the menu object
    return this.menus[menuId];
  };

  // Add new menu object by menu id
  public addMenu(menuId: string, options: any) {
    options = options || {};
    
    // Create the new menu
    this.menus[menuId] = new MenuItem(options);
    // Return the menu object
    return this.menus[menuId];

  };

  // Remove existing menu object by menu id
  public removeMenu(menuId) {
    // Validate that the menu exists
    this.validateMenuExistance(menuId);
    // Return the menu object
    delete this.menus[menuId];
  };

  // Add menu item object
  public addMenuItem(menuId: string, options) {
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
  }

  public addSubMenuItem(menuId, parentItemState, options) {
    options = options || {};

    // Validate that the menu exists
    this.validateMenuExistance(menuId);

    // Search for menu item
    this.menus[menuId].addSubMenuItem(parentItemState, options);
    
    // Return the menu object
    return this.menus[menuId];
  };
  
  // Remove existing menu object by menu id
  public removeMenuItem(menuId, menuItemState) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      
      this.menus[menuId].removeMenuItem(menuItemState);
      // Return the menu object
      return this.menus[menuId];
   };

    // Remove existing menu object by menu id
   public removeSubMenuItem(menuId, submenuItemState) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      
      this.menus[menuId].removeSubMenuItem(submenuItemState);
      // Return the menu object
      return this.menus[menuId];
    };

};


