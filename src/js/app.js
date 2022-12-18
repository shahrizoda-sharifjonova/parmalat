import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

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