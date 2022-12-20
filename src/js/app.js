import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".about__swiper", {
    grabCursor: true,
    modules: [ Navigation],
    slidesPerView: 1,
    navigation: {
      nextEl: ".about__button-prev",
      prevEl: ".about__button-next",
    },
  });

const dropdown = document.querySelector('.header__dropdown');
const dropdownBtn = document.querySelector('.header__dropdown-button');
const dropdownContent = document.querySelector('.header__dropdown-content');

dropdown.addEventListener('click', (e)=>{
    dropdownBtn.classList.toggle('active')
    dropdownContent.classList.toggle('active')
})

const content = document.querySelector('.header__content');
const menu = document.querySelector('.menu');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    content.classList.toggle('active')
})

$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(200);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});