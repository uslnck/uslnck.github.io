import "./style.css";

var benefitsSwiper = new Swiper(".benefits-section__swiper-container", {
  pagination: {
    el: ".benefits-section__swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});

var awardsSwiper = new Swiper(".awards-section__swiper-container", {
  pagination: {
    el: ".awards-section__swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});

let collapsedCards = document.querySelector(".card-wrapper--collapsed");
let expandButton = document.querySelector(".card-expand-button");
let expandButtonImage = document.querySelector(".card-expand-button-image");
let collapsed = true;

expandButton.addEventListener("click", function () {
  if (collapsed) {
    expandButtonImage.classList.add("card-collapse-button-image");
    expandButtonImage.classList.remove("card-expand-button-image");
    collapsedCards.classList.add("card-wrapper--expanded");
    collapsed = false;
  } else {
    expandButtonImage.classList.remove("card-collapse-button-image");
    expandButtonImage.classList.add("card-expand-button-image");
    collapsedCards.classList.remove("card-wrapper--expanded");
    collapsed = true;
  }
});

let burgerMenu = document.querySelector(".menu-wrapper");
let burgerButton = document.querySelector(".header__burger-menu-button");
let burgerButtonImage = document.querySelector(".header__burger-menu-image");
let body = document.body;
let menuActive = false;

burgerButton.addEventListener("click", function () {
  if (!menuActive) {
    window.scrollTo(0, 0);
    burgerButtonImage.classList.remove("header__burger-menu-image");
    burgerButtonImage.classList.add("header__burger-menu-image--active");
    burgerMenu.classList.remove("hidden");
    body.classList.add("fixed");
    menuActive = true;
  } else {
    burgerButtonImage.classList.remove("header__burger-menu-image--active");
    burgerButtonImage.classList.add("header__burger-menu-image");
    burgerMenu.classList.add("hidden");
    body.classList.remove("fixed");
    menuActive = false;
  }
});

let menuCloseButton = document.querySelector(".menu__close-button");

menuCloseButton.addEventListener("click", function (evt) {
  evt.stopPropagation;
  window.scrollTo(0, 0);
  burgerButtonImage.classList.remove("header__burger-menu-image--active");
  burgerButtonImage.classList.add("header__burger-menu-image");
  burgerMenu.classList.add("hidden");
  body.classList.remove("fixed");
  menuActive = false;
});

let internalMenu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function (evt) {
  evt.stopPropagation();
  if (evt.target === burgerMenu) {
    burgerButtonImage.classList.remove("header__burger-menu-image--active");
    burgerButtonImage.classList.add("header__burger-menu-image");
    burgerMenu.classList.add("hidden");
    body.classList.remove("fixed");
    menuActive = false;
  }
});

window.addEventListener("resize", handleResize);

function handleResize() {
  if (menuActive === true && window.matchMedia("(min-width: 1440px)").matches) {
    burgerMenu.classList.add("hidden");
    if (!orderActive) {
      body.classList.remove("fixed");
    }
  }
  if (menuActive === true && window.matchMedia("(max-width: 1439px)").matches) {
    window.scrollTo(0, 0);
    burgerMenu.classList.remove("hidden");
    body.classList.add("fixed");
  }
}

let benefitsButtons = document.querySelectorAll(".button-to-benefits");
let mainButtons = document.querySelectorAll(".button-to-about-us");

let benefitsSection = document.querySelector(".benefits-section");
let aboutUsSection = document.querySelector(".about-us-section");

for (let i = 0; i < benefitsButtons.length; i++) {
  benefitsButtons[i].addEventListener("click", function (evt) {
    evt.stopPropagation();
    burgerButtonImage.classList.remove("header__burger-menu-image--active");
    burgerButtonImage.classList.add("header__burger-menu-image");
    burgerMenu.classList.add("hidden");
    body.classList.remove("fixed");
    menuActive = false;

    if (!window.matchMedia("(max-width: 767px)").matches) {
      expandButtonImage.classList.remove("card-expand-button-image");
      expandButtonImage.classList.add("card-collapse-button-image");
      collapsedCards.classList.add("card-wrapper--expanded");
      collapsed = false;
    }

    benefitsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

for (let i = 0; i < mainButtons.length; i++) {
  mainButtons[i].addEventListener("click", function (evt) {
    evt.stopPropagation();
    burgerButtonImage.classList.remove("header__burger-menu-image--active");
    burgerButtonImage.classList.add("header__burger-menu-image");
    burgerMenu.classList.add("hidden");
    body.classList.remove("fixed");
    menuActive = false;

    aboutUsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

let orderMenu = document.querySelector(".order-wrapper");
let costButtons = document.querySelectorAll(".unified-cost-button");
let orderActive = false;

for (let i = 0; i < costButtons.length; i++) {
  costButtons[i].addEventListener("click", function () {
    if (!orderActive) {
      orderMenu.classList.remove("hidden");
      body.classList.add("fixed");
      orderActive = true;
    } else {
      orderMenu.classList.add("hidden");
      body.classList.remove("fixed");
      orderActive = false;
    }
  });
}

let orderCloseButton = document.querySelector(".order__close-button");

orderCloseButton.addEventListener("click", function (evt) {
  evt.stopPropagation();
  orderMenu.classList.add("hidden");
  body.classList.remove("fixed");
  orderActive = false;
});

let internalOrder = document.querySelector(".order");

orderMenu.addEventListener("click", function (evt) {
  evt.stopPropagation();
  if (evt.target === orderMenu) {
    orderMenu.classList.add("hidden");
    body.classList.remove("fixed");
    orderActive = false;
  }
});

let callButtons = document.querySelectorAll(".header__call-button");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    if (!orderActive) {
      orderMenu.classList.remove("hidden");
      body.classList.add("fixed");
      orderActive = true;
    } else {
      orderMenu.classList.add("hidden");
      body.classList.remove("fixed");
      orderActive = false;
    }
  });
}

let contactsButtons = document.querySelectorAll(".button-to-contacts");
let reviewsButtons = document.querySelectorAll(".button-to-reviews");

let reviewsSection = document.querySelector(".awards-section");
let contactsSection = document.querySelector("footer");

for (let i = 0; i < reviewsButtons.length; i++) {
  reviewsButtons[i].addEventListener("click", function (evt) {
    evt.stopPropagation();
    burgerButtonImage.classList.remove("header__burger-menu-image--active");
    burgerButtonImage.classList.add("header__burger-menu-image");
    burgerMenu.classList.add("hidden");
    body.classList.remove("fixed");
    menuActive = false;

    reviewsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

for (let i = 0; i < contactsButtons.length; i++) {
  contactsButtons[i].addEventListener("click", function (evt) {
    evt.stopPropagation();
    burgerButtonImage.classList.remove("header__burger-menu-image--active");
    burgerButtonImage.classList.add("header__burger-menu-image");
    burgerMenu.classList.add("hidden");
    body.classList.remove("fixed");
    menuActive = false;

    contactsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
