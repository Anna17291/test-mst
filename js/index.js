let navMain = document.querySelector('.page-header__menu');
let navToggle = document.querySelector('.page-header__toggle');
let navCloseToggle = document.querySelector('.page-header__close-toggle');
let page = document.querySelector('body');
const breakpoint = window.matchMedia('(min-width: 981px)');
let overlay = document.querySelector('.page-header__overlay');

const openNavigation = () => {
  navMain.classList.add('page-header__menu--opened');
  navMain.classList.remove('page-header__menu--closed');
  navToggle.classList.add('page-header__toggle--closed');
  navToggle.classList.remove('page-header__toggle--opened');
  navCloseToggle.classList.remove('page-header__close-toggle--closed');
  navCloseToggle.classList.add('page-header__close-toggle--opened');
  page.style.overflow = 'hidden';
  navCloseToggle.addEventListener('click', closeNavigation);
  navToggle.removeEventListener('click', openNavigation);

  window.addEventListener('resize', () => {
    if (breakpoint.matches) {
      closeNavigation()
    }
  });

  overlay.addEventListener('click', closeNavigation)
}

const closeNavigation = () => {
  navMain.classList.remove('page-header__menu--opened');
  navMain.classList.add('page-header__menu--closed');
  navToggle.classList.remove('page-header__toggle--closed');
  navToggle.classList.add('page-header__toggle--opened');
  navCloseToggle.classList.add('page-header__close-toggle--closed');
  navCloseToggle.classList.remove('page-header__close-toggle--opened');
  page.style.overflow = 'auto';
  navCloseToggle.removeEventListener('click', closeNavigation);
  navToggle.addEventListener('click', openNavigation);
}

const openCloseNavigation = () => {
  if (navToggle) {
    navToggle.addEventListener('click', openNavigation);
  } else {
    navCloseToggle.addEventListener('click', closeNavigation);
  }
}

openCloseNavigation()
