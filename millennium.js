/*const swiper = new Swiper(".phone-swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: "auto",
      spaceBetween: 90,
    },
  },
});

let collapsedCards = document.querySelector(".card-2ndcontainer--collapsed");
let expandButton = document.querySelector(".notPhone-card-expanded__button");
let expandButtonImage = document.querySelector(
  ".notPhone-card-expanded__button--expanded"
);

let collapsed = true;

expandButton.addEventListener("click", function () {
  if (collapsed) {
    expandButtonImage.src =
      "unified--assets/unified__notPhone-collapse-button.svg";
    collapsedCards.classList.add("card-2ndcontainer--expanded");
    collapsed = false;
  } else {
    expandButtonImage.src =
      "unified--assets/unified__notPhone-expand-button.svg";
    collapsedCards.classList.remove("card-2ndcontainer--expanded");
    collapsed = true;
  }
});*/

/*---------------------------------------------------------------------------*/

/*let burgerMenuTemplate = document.querySelector("#burger-menu").content;
let burgerMenu = burgerMenuTemplate.querySelector(".wrapperd");*/
let burgerMenu = document.querySelector(".menu-wrapper");
let burgerButton = document.querySelector(".header__burger-menu-button");
let burgerButtonImage = document.querySelector(".header__burger-menu-image");
let body = document.body;

let active = true;
let crossCloseButton = document.querySelector(".menu__close-button");

burgerButton.addEventListener("click", function () {
  if (active) {
    burgerButtonImage.src =
      "unified--assets/header__burger-menu-button--active.svg";
    burgerMenu.classList.remove("hidden");
    body.classList.add("fixed");
    active = false;
  } else {
    burgerButtonImage.src = "unified--assets/header__burger-menu-button.svg";
    burgerMenu.classList.add("hidden");
    body.classList.remove("fixed");
    active = true;
  }
});

crossCloseButton.addEventListener("click", function () {
  burgerButtonImage.src = "unified--assets/header__burger-menu-button.svg";
  burgerMenu.classList.add("hidden");
  body.classList.remove("fixed");
  active = true;
});

/* Очищать removeEventListener*/

/*
var doit;
window.onresize = function () {
  clearTimeout(doit);
  doit = setTimeout(resizedw, 100);
};

function resizedw() {
  if (window.screen.width >= 1440) {
    let phone = document.querySelectorAll(".Phone");
    let laptop = document.querySelectorAll(".Laptop");

    for (let i = 0; i < laptop.length; i++) {
      laptop[i].classList.remove("Laptop");
    }

    for (let i = 0; i < phone.length; i++) {
      phone[i].classList.remove("Phone");
    }
  }

  if (window.screen.width < 768) {
    let laptop = document.querySelectorAll(".Laptop");
    let desktop = document.querySelectorAll(".Desktop");
    for (let i = 0; i < laptop.length; i++) {
      laptop[i].classList.remove("Laptop");
    }

    for (let i = 0; i < desktop.length; i++) {
      desktop[i].classList.remove("Desktop");
    }
  }

  if (window.screen.width >= 768 && window.screen.width < 1440) {
    let phone = document.querySelectorAll(".Phone");
    let desktop = document.querySelectorAll(".Desktop");
    for (let i = 0; i < phone.length; i++) {
      phone[i].classList.remove("Phone");
    }

    for (let i = 0; i < desktop.length; i++) {
      desktop[i].classList.remove("Desktop");
    }
  }
}
*/
