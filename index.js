const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
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

window.addEventListener('resize', handleResize);

function handleResize() {
  if (active === true && window.matchMedia('(min-width: 1440px)').matches) {
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
  }
  if (active === true && window.matchMedia('(max-width: 1439px)').matches) {
    burgerMenu.classList.remove('hidden');
    body.classList.add('fixed');
  }
}

let benefitsButton = document.getElementById('button-to-benefits');
let mainButton = document.getElementById('button-to-about-us');

let benefitsSection = document.getElementById('benefits-section');
let aboutUsSection = document.getElementById('about-us-section');

benefitsButton.addEventListener('click', function (evt) {
  evt.stopPropagation();
  burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
  burgerMenu.classList.add('hidden');
  body.classList.remove('fixed');
  active = false;

  if (!window.matchMedia('(max-width: 767px)').matches) {
    expandButtonImage.src = 'assets/unified/card-collapse-button.svg';
    collapsedCards.classList.add('card-wrapper--expanded');
    collapsed = false;
  }
  benefitsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

mainButton.addEventListener('click', function (evt) {
  evt.stopPropagation();
  burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
  burgerMenu.classList.add('hidden');
  body.classList.remove('fixed');
  active = false;

  aboutUsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
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

/* //TODO add somewhere
function detectBrowser() {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'Chrome';
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'Firefox';
  } else if (userAgent.match(/safari/i)) {
    browserName = 'Safari';
  } else if (userAgent.match(/opr\//i)) {
    browserName = 'Opera';
  } else if (userAgent.match(/edg/i)) {
    browserName = 'Edge';
  } else if (userAgent.match(/android/i)) {
    browserName = 'Android';
  } else if (userAgent.match(/iphone/i)) {
    browserName = 'iPhone';
  } else {
    browserName = 'Unknown';
  }
  console.log(browserName);
}
*/
