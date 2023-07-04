const card = document.querySelector(".card");
const cardBody = document.querySelectorAll(".tab-pane");
const builder = document.querySelectorAll(".builder-component");
const snackbar = document.querySelector("#snackbar");
const tabs = document.querySelector(".wrapper");
const formioWrapper = document.querySelector(".formio-wrapper");
let parent = document.querySelector(".formio-component-form").parentElement;
const child = document.querySelector(".formio-component-form");

const cardHeader = document.querySelector(".card-header");
const cardHeaderUl = document.querySelector(".card-header > ul");
const navBar = document.querySelector(".card-header-tabs");
const navItems = document.querySelectorAll(".nav-tabs > .nav-item");
const navLinks = document.querySelectorAll(".nav-tabs> .nav-item > .nav-link");


const formio = document.querySelector('.preview .content .wrapper formio');
  
  
  
    cardBody[0].classList.remove('active')
    cardBody[0].style.display = 'none'
    cardBody[1].classList.add('active')
    cardBody[1].style.display = 'block'
    
