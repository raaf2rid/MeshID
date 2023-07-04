
const card = document.querySelector(".card");
const cardBody = document.querySelectorAll(".tab-pane");

const cardHeader = document.querySelector(".card-header");
const cardHeaderUl = document.querySelector(".card-header > ul");
const navBar = document.querySelector(".card-header-tabs");
const navItems = document.querySelectorAll(".nav-tabs > .nav-item");
const navLinks = document.querySelectorAll(".nav-tabs> .nav-item > .nav-link");



if ($(".nav-header").length === 0) {
  $(".card-header > ul").before('<p class="nav-header">All Pages</p>');
}

$('li.nav-item a[href="#admin"]').parent('li.nav-item').removeClass('active');
$('li.nav-item a[href="#admin"]').removeClass('active');



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



$('.toggle').click(function() {
  let sidebar = $('.card-header');
  let toggleSpan = $('.toggle span');

  if (sidebar.hasClass('sidebarshow')) {
    sidebar.removeClass('sidebarshow');
    toggleSpan.removeClass('toggle');
  } else {
    sidebar.addClass('sidebarshow');
    toggleSpan.addClass('toggle');
  }
});
