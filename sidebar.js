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
  var headerCode = '<header class="header">' +
     '<div class="toggle-div">' +
       '<button type="button" class="toggle" id="toggle">' +
         '<span></span>' +
        '</button>' +
    '</div>' +
  '</header>';

  // Prepend the header code to '.card'
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
