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
    expandButtonImage.src = 'assets/unified/card-collapse-button.svg';
    collapsedCards.classList.add('card-wrapper--expanded');
    collapsed = false;
  } else {
    expandButtonImage.src = 'assets/unified/card-expand-button.svg';
    collapsedCards.classList.remove('card-wrapper--expanded');
    collapsed = true;
  }
});

let burgerMenu = document.querySelector('.menu-wrapper');
let burgerButton = document.querySelector('.header__burger-menu-button');
let burgerButtonImage = document.querySelector('.header__burger-menu-image');
let body = document.body;
let active = false;

burgerButton.addEventListener('click', function () {
  if (!active) {
    window.scrollTo(0, 0);
    burgerButtonImage.src = 'assets/unified/burger-menu-button--active.svg';
    burgerMenu.classList.remove('hidden');
    body.classList.add('fixed');
    active = true;
  } else {
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    active = false;
  }
});

let crossCloseButton = document.querySelector('.menu__close-button');

crossCloseButton.addEventListener('click', function () {
  window.scrollTo(0, 0);
  burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
  burgerMenu.classList.add('hidden');
  body.classList.remove('fixed');
  active = false;
});

let internalMenu = document.querySelector('.menu');

burgerMenu.addEventListener('click', function (evt) {
  if (evt.target !== internalMenu) {
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    active = false;
  }
});

let currentX = window.innerWidth;
window.addEventListener('resize', handleResize);

function handleResize() {
  let x = window.innerWidth;

  if ((currentX >= 1440) & (active === true)) {
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
  }
  if ((active === true) & (currentX < 1440)) {
    burgerMenu.classList.remove('hidden');
    body.classList.add('fixed');
  }
  currentX = x;
}

let benefitsButton = document.getElementById('button-to-benefits');
let benefitsSection = document.getElementById('benefits-section');
let aboutUsSection = document.getElementById('about-us-section');

benefitsButton.addEventListener('click', function () {
  burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
  burgerMenu.classList.add('hidden');
  body.classList.remove('fixed');
  active = false;

  benefitsSection.scrollIntoView();

  expandButtonImage.src = 'assets/unified/card-collapse-button.svg';
  collapsedCards.classList.add('card-wrapper--expanded');
  collapsed = false;
});

mainButton.addEventListener('click', function () {
  burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
  burgerMenu.classList.add('hidden');
  body.classList.remove('fixed');
  active = false;

  aboutUsSection.scrollIntoView();
});

/* //TODO add somewhere
let menuDisplayState = getElementDisplayState(burgerMenu);
function getElementDisplayState(el) {
  let style = window.getComputedStyle(el);
  console.log(style.display);
  console.log(active);
  return style.display;
}
*/
