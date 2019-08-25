import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.nav = $(".nav");
    this.menuIcon = $(".nav__menu-icon");
    this.menuContent = $(".primary-nav");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("primary-nav--is-visible");
    this.nav.toggleClass("nav--is-expanded");
    this.menuIcon.toggleClass("nav__menu-icon--close-x");
  }
}

export default MobileMenu;
