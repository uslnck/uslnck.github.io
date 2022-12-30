const swiper = new Swiper('.phone-swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 'auto',
      spaceBetween: 90,
    },
  },
});

let collapsedCards = document.querySelector('.card-2ndcontainer--collapsed');
let expandButton = document.querySelector('.notPhone-card-expanded__button');
let expandButtonImage = document.querySelector(
  '.notPhone-card-expanded__button--expanded'
);

let collapsed = true;

expandButton.addEventListener('click', function () {
  if (collapsed) {
    expandButtonImage.src =
      'unified--assets/unified__notPhone-collapse-button.svg';
    collapsedCards.classList.add('card-2ndcontainer--expanded');
    collapsed = false;
  } else {
    expandButtonImage.src =
      'unified--assets/unified__notPhone-expand-button.svg';
    collapsedCards.classList.remove('card-2ndcontainer--expanded');
    collapsed = true;
  }
});
