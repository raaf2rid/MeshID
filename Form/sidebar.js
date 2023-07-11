// Hover Animation 

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

$('.header').first().click(function(event) {
  let sidebar = $('.card-header');
  let toggleIcon = $('.toggle-icon');

  console.log('Clicked on toggle-icon');

  if (sidebar.hasClass('sidebarshow')) {
    sidebar.removeClass('sidebarshow');
    toggleIcon.removeClass('toggled');
    console.log('Removed sidebarshow');
  } else {
    sidebar.addClass('sidebarshow');
    toggleIcon.addClass('toggled');
    console.log('Added sidebarshow');
  }

  event.stopPropagation();
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
