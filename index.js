const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
});

let collapsedCards = document.querySelector('.card-wrapper--collapsed');
let expandButton = document.querySelector('.card-expand-button');
let expandButtonImage = document.querySelector('.card-expand-button--expanded');
let collapsed = true;

expandButton.addEventListener('click', function () {
  if (collapsed) {
    expandButtonImage.src =
      'assets/unified--assets/unified__card-collapse-button.svg';
    collapsedCards.classList.add('card-wrapper--expanded');
    collapsed = false;
  } else {
    expandButtonImage.src =
      'assets/unified--assets/unified__card-expand-button.svg';
    collapsedCards.classList.remove('card-wrapper--expanded');
    collapsed = true;
  }
});

let burgerMenu = document.querySelector('.menu-wrapper');
let burgerButton = document.querySelector('.header__burger-menu-button');
let burgerButtonImage = document.querySelector('.header__burger-menu-image');
let active = false;

burgerButton.addEventListener('click', function () {
  if (!active) {
    window.scrollTo(0, 0);
    burgerButtonImage.src =
      'assets/unified--assets/header__burger-menu-button--active.svg';
    burgerMenu.classList.remove('hidden');
    body.classList.add('fixed');
    active = true;
  } else {
    window.scrollTo(0, 0);
    burgerButtonImage.src =
      'assets/unified--assets/header__burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    active = false;
  }
});

let crossCloseButton = document.querySelector('.menu__close-button');

crossCloseButton.addEventListener('click', function () {
  window.scrollTo(0, 0);
  burgerButtonImage.src =
    'assets/unified--assets/header__burger-menu-button.svg';
  burgerMenu.classList.add('hidden');
  body.classList.remove('fixed');
  active = false;
});

let internalMenu = document.querySelector('.menu');
let body = document.body;

/* if (evt.target !== (internalMenu || internalMenu.children)) */

/* let fixedArea = document.querySelector('.body.fixed'); */
/* if (evt.target === fixedArea) */

burgerMenu.addEventListener('click', function (evt) {
  if (evt.target !== internalMenu) {
    burgerButtonImage.src =
      'assets/unified--assets/header__burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    active = false;
  }
});
