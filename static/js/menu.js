// menu.js
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var ESMenu = {
  init: function() {
    var menu = new Menu();
    menu.append(new MenuItem({
      label: 'item1',
      click: function() {
        console.log('item1 clicked.')
      }
    }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'item2', type: 'checkbox', checked: true }));
    window.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      menu.popup(remote.getCurrentWindow());
    }, false);

    //this.initApplicationMenu();
  },

  initApplicationMenu: function() {
    var template = [
      {
        label: 'Foo',
        submenu: [
          {
            label: 'About Electron Sandbox'
          }
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Version'
          }
        ]
      }
    ];
    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
};

$(function() {
  ESMenu.init();
});
