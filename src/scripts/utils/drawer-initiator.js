const DrawerInitiator = {
  init({ button, drawer }) {
    const menuHome = document.getElementsByClassName('nav-item')[0];
    const menuFavorite = document.getElementsByClassName('nav-item')[1];
    const menuAbout = document.getElementsByClassName('nav-item')[2];

    function drawerToggle(element, method) {
      element.addEventListener('click', (event) => {
        method(event, drawer);
      });
    }

    drawerToggle(button, this._toggleDrawer);
    drawerToggle(menuHome, this._closeDrawer);
    drawerToggle(menuFavorite, this._closeDrawer);
    drawerToggle(menuAbout, this._closeDrawer);
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    document.body.style.overflow = 'hidden';
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
    document.body.style.overflow = 'scroll';
  },
};

export default DrawerInitiator;
