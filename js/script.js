let elSiteHeader = document.querySelector(`.site-heading`);
let elSiteNavToggler = document.querySelector(`.site-nav__toggler`);

elSiteNavToggler.addEventListener(`click`, () => {
  elSiteHeader.classList.toggle(`site-heading--open`);
})