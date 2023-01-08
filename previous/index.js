var benefitsSwiper = new Swiper('.benefits-section__swiper-container', {
  pagination: {
    el: '.benefits-section__swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
});

var awardsSwiper = new Swiper('.awards-section__swiper-container', {
  pagination: {
    el: '.awards-section__swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
let expandButtonImage = document.querySelector('.card-expand-button-image');
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
let menuActive = false;

burgerButton.addEventListener('click', function () {
  if (!menuActive) {
    window.scrollTo(0, 0);
    burgerButtonImage.src = 'assets/unified/burger-menu-button--active.svg';
    burgerMenu.classList.remove('hidden');
    body.classList.add('fixed');
    menuActive = true;
  } else {
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    menuActive = false;
  }
});

let menuCloseButton = document.querySelector('.menu__close-button');

menuCloseButton.addEventListener('click', function (evt) {
  evt.stopPropagation;
  window.scrollTo(0, 0);
  burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
  burgerMenu.classList.add('hidden');
  body.classList.remove('fixed');
  menuActive = false;
});

let internalMenu = document.querySelector('.menu');

burgerMenu.addEventListener('click', function (evt) {
  evt.stopPropagation();
  if (evt.target === burgerMenu) {
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    menuActive = false;
  }
});

window.addEventListener('resize', handleResize);

function handleResize() {
  if (menuActive === true && window.matchMedia('(min-width: 1440px)').matches) {
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
  }
  if (menuActive === true && window.matchMedia('(max-width: 1439px)').matches) {
    burgerMenu.classList.remove('hidden');
    body.classList.add('fixed');
  }
}

let benefitsButtons = document.querySelectorAll('.button-to-benefits');
let mainButtons = document.querySelectorAll('.button-to-about-us');

let benefitsSection = document.querySelector('.benefits-section');
let aboutUsSection = document.querySelector('.about-us-section');

for (let i = 0; i < benefitsButtons.length; i++) {
  benefitsButtons[i].addEventListener('click', function (evt) {
    evt.stopPropagation();
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    menuActive = false;

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
}

for (let i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener('click', function (evt) {
    evt.stopPropagation();
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    menuActive = false;

    aboutUsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

let orderMenu = document.querySelector('.order-wrapper');
let costButtons = document.querySelectorAll('.unified-cost-button');
let orderActive = false;

for (let i = 0; i < costButtons.length; i++) {
  costButtons[i].addEventListener('click', function () {
    if (!orderActive) {
      orderMenu.classList.remove('hidden');
      body.classList.add('fixed');
      orderActive = true;
    } else {
      orderMenu.classList.add('hidden');
      body.classList.remove('fixed');
      orderActive = false;
    }
  });
}

let orderCloseButton = document.querySelector('.order__close-button');

orderCloseButton.addEventListener('click', function (evt) {
  evt.stopPropagation();
  orderMenu.classList.add('hidden');
  orderActive = false;
  if (!menuActive) {
    body.classList.remove('fixed');
  }
});

let internalOrder = document.querySelector('.order');

orderMenu.addEventListener('click', function (evt) {
  evt.stopPropagation();
  if (evt.target === orderMenu) {
    orderMenu.classList.add('hidden');
    orderActive = false;
    if (!menuActive) {
      body.classList.remove('fixed');
    }
  }
});

callButtons = document.querySelectorAll('.header__call-button');

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener('click', function (evt) {
    evt.stopPropagation();
    if (!orderActive) {
      orderMenu.classList.remove('hidden');
      body.classList.add('fixed');
      orderActive = true;
    } else {
      orderMenu.classList.add('hidden');
      body.classList.remove('fixed');
      orderActive = false;
    }
  });
}

contactsButtons = document.querySelectorAll('.button-to-contacts');
reviewsButtons = document.querySelectorAll('.button-to-reviews');

let reviewsSection = document.querySelector('.awards-section');
let contactsSection = document.querySelector('footer');

for (let i = 0; i < reviewsButtons.length; i++) {
  reviewsButtons[i].addEventListener('click', function (evt) {
    evt.stopPropagation();
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    menuActive = false;

    reviewsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

for (let i = 0; i < contactsButtons.length; i++) {
  contactsButtons[i].addEventListener('click', function (evt) {
    evt.stopPropagation();
    burgerButtonImage.src = 'assets/unified/burger-menu-button.svg';
    burgerMenu.classList.add('hidden');
    body.classList.remove('fixed');
    menuActive = false;

    contactsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

/* //TODO add somewhere
let menuDisplayState = getElementDisplayState(burgerMenu);
function getElementDisplayState(el) {
  let style = window.getComputedStyle(el);
  console.log(style.display);
  console.log(menuActive);
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
