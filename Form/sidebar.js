// Hover Animation 


console.log('executed')

$(function() {
  $('.nav-link').hover(function() {
    $(this).parent('.nav-item').addClass('hovered');
  }, function() {
    $(this).parent('.nav-item').removeClass('hovered');
  });
});



// Hamburger Icon 


if ($('.content .header').length === 0) {
  let headerCode = '<header class="header">' +
       '<div class="toggle-icon">' +
         '<div id="bar1" class="bars"></div>' +
         '<div id="bar2" class="bars"></div>' +
         '<div id="bar3" class="bars"></div>' +
       '</div>' +
  '</header>';

    $('.content').prepend(headerCode);
}


// Sidebar Show/Hide

document.querySelector('.header').addEventListener('click', function(event) {
  let sidebar = document.querySelectorAll('.card-header');
  let toggleIcon = document.querySelectorAll('.toggle-icon');

  console.log(toggleIcon);
});







// Card Animation 

$(function() {
  const navLinks = $(".nav-tabs > .nav-item > .nav-link");
  const cardBody = $(".tab-pane");

  navLinks.on("click", function() {
    // Remove card-animation class from all card bodies
    cardBody.removeClass("card-animation");
    
    // Get the active card body
    const activeCardBody = $(".tab-pane.active");

    // Add card-animation class to the active card body
    activeCardBody.addClass("card-animation");
  });
});
