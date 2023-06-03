const preview = document.querySelector(".preview")
const content = document.querySelector(".content")
const cardHeader = document.querySelector(".card-header");
const card = document.querySelector(".card");
const cardBody = document.querySelectorAll(".tab-pane");
const head = document.querySelector("head");
const navBar = document.querySelector(".card-header-tabs");
const navItems = document.querySelectorAll(".nav-tabs > .nav-item");
const navLinks = document.querySelectorAll(".nav-tabs> .nav-item > .nav-link");
const builder = document.querySelectorAll(".builder-component");
const cardHeaderUl = document.querySelector(".card-header > ul");
const snackbar = document.querySelector("#snackbar");
const tabs = document.querySelector(".wrapper");
const formioWrapper = document.querySelector(".formio-wrapper");
let parent = document.querySelector(".formio-component-form").parentElement;
const child = document.querySelector(".formio-component-form");

const errorFields = document.querySelectorAll(".tab-pane:not(:last-child) .custom-error")
const backBtn = document.querySelectorAll('.navigation-back > .navigation-back')
const nextBtn = document.querySelectorAll('.navigation-next > .navigation-next')
const formio = document.querySelector('.preview .content .wrapper formio');


preview.style.display = "none";
const logo = document.createElement("section");
logo.innerHTML = `
<img class="logo" src="https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif" alt="">
`
preview.appendChild(logo);


if (builder.length === 0) {
  parent.classList.add("parent");




  if (!parent.children[1]) {
    
    parent.querySelector(".formio-form").style.display = "none";

    tabs.style.display = "flex";
    tabs.style.justifyContent = "center";
    tabs.style.alignItems = "center";

    setTimeout(() => {
      
  
      formio.style.width = '35%';
      parent.querySelector("section").innerHTML = `
        <img class="logo" src="https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif" alt="">
        `;


    }, 0);

    setTimeout(() => {

      preview.style.display = "block";
      parent.querySelector(".formio-form").style.display = "block";
      parent.querySelector("section").innerHTML = "";
      tabs.style.display = "flex";
      formio.style.width = '65%';
    }, 1);
  }




}