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
  let headerCode = 
  `<header class="header">
      <div class="switch-holder">
      <div class="switch-label">
      <i class="fa-solid fa-sidebar"></i><span>All Pages</span>
      </div>
      <div class="switch-toggle">
          <input type="checkbox" id="all-pages">
          <label for="all-pages"></label>
      </div>
    </div>
  '</header>`;

    $('.content').prepend(headerCode);
}


// Sidebar Show/Hide

$('.switch-toggle').click(function() {
  let sidebar = $('.card-header');
  let toggleIcon = $('.toggle-icon');

  sidebar.toggleClass('sidebarshow');
  toggleIcon.toggleClass('toggled');
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
