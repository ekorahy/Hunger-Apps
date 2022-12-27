const DrawerInitiator = {
  init({
    button, drawer, hero, content,
  }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
  },

  toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
