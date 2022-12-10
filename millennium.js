var cardTemplate = document.querySelector("#card-template").content;
var newCardTemplate = cardTemplate.querySelector(".card-template__card");

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
