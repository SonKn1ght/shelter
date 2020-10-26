import Pagination from "./pagination";
import {pets} from "./mock";

// const pagination = new Pagination(pets);
// pagination.init();

const headerPage = document.querySelector(`.header-page`);
const hamburger = headerPage.querySelector(`.header__hamburger`);
const headerPageNavigation = headerPage.querySelector(`.header-page__navigation`);
const headerPageWrapper = headerPage.querySelector(`.header-page__wrapper`);
const navigationLinkActive = headerPage.querySelector(`.navigation__item .navigation__link_active`);

const body = document.querySelector(`body`);

const modalOverlay = document.querySelector(`.modal-overlay`);

const switchMenu = () => {
  body.classList.toggle(`not-scroll`);
  headerPage.classList.toggle(`header-page__mobile-show-menu`);
  hamburger.classList.toggle(`hamburger_rotate`);
  modalOverlay.classList.toggle(`modal-show`);
  headerPageWrapper.classList.toggle(`header-page__wrapper_mobile-active`);
  headerPageNavigation.classList.toggle(`header-page__navigation_show`);

}

hamburger.addEventListener('click', () => {
  switchMenu();
// своевременное наложение и удаление обработчика
  if (hamburger.classList.contains(`hamburger_rotate`)) {
    modalOverlay.addEventListener('click', switchMenu);
    navigationLinkActive.addEventListener('click', switchMenu);
  } else {
    modalOverlay.removeEventListener('click', switchMenu);
    navigationLinkActive.removeEventListener('click', switchMenu);
  }
});
