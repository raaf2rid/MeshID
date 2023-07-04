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
     '<div class="toggle-div">' +
       '<input class="toggle-switch" type="checkbox">' +
       '<label class="toggle" for="checkbox">' +
         '<div id="bar1" class="bars"></div>' +
         '<div id="bar2" class="bars"></div>' +
         '<div id="bar3" class="bars"></div>' +
       '</label>' +
     '</div>' +
  '</header>';

    $('.content').prepend(headerCode);
}


// Sidebar Show/Hide


$('.toggle-div').click(function() {
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
