
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




if ($(".nav-header").length === 0) {
  $(".card-header > ul").before('<p class="nav-header">All Pages</p>');
}

$('li.nav-item a[href="#admin"]').parent().remove();


navLinks.forEach((item) => {
  
  item.addEventListener("click", () => {
    animate();
  });
});


function animate() {


  cardBody.forEach(tab=>{
    if(tab.classList.contains('active')){
      tab.classList.add("card-animation");
      disableButtons();
      setTimeout(removeAnimation, 800);
    
      function removeAnimation() {
        enableButtons();
        tab.classList.remove("card-animation");
      }
    }
  })


  
}

/////
// Sidebar buttons enabling/disabling for Card animation to work properly
/////

function disableButtons() {
  navLinks.forEach((item) => {
    item.style.pointerEvents = "none";
  });
}

function enableButtons() {
  navLinks.forEach((item) => {
    item.style.pointerEvents = "auto";
  });
}


function mediaQueriesHeader(navHeader) {
  /////
  // Mobile Devices
  /////

  if (
    window.matchMedia("(min-width: 200px)").matches &&
    window.matchMedia("(max-width: 600px)").matches
  ) {
    navHeader.style.borderTopRightRadius = "5px";
    navHeader.style.textAlign = "center";
    navHeader.style.paddingLeft = "10px";
    cardHeader.style.textAlign = "center";
    snackbar.style.left = "37%";
    cardHeader.style.borderBottom = "5px solid #f5f5f5";
    cardHeader.style.borderRight = "0";
    formio.style.width = '100%';
  }

  /////
  // Large Screen
  /////
  else {
    cardHeader.style.borderBottom = "0";
    cardHeader.style.width = "570px";
    card.style.minHeight = "670px";
    navHeader.style.borderTopRightRadius = "0";
    navHeader.style.textAlign = "start";
    cardHeader.style.textAlign = "start";
    navHeader.style.paddingLeft = "18px";
    snackbar.style.left = "53%";
    formio.style.width = '65%';
  
  }
}


$(document).ready(function() {
  $('.nav-link').hover(function() {
    $(this).parent('.nav-item').addClass('hovered');
  }, function() {
    $(this).parent('.nav-item').removeClass('hovered');
  });
});


// Sidebar 

// Check if the header code has already been added to '.card'
if ($('.content .header').length === 0) {
  // Get the header code
  var headerCode = '<header class="header">' +
     '<div class="header_in">' +
       '<button type="button" class="toggle" id="toggle">' +
         '<span></span>' +
        '</button>' +
    '</div>' +
  '</header>';

  // Prepend the header code to '.card'
  $('.content').prepend(headerCode);
}



var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function() {
  if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.querySelector('.card-header').classList.add('sidebarshow');
    btnst = false;
  }else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.querySelector('.card-header').classList.remove('sidebarshow');
    btnst = true;
  }
}