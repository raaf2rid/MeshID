// Hover Animation 

$(function() {
  $('.nav-link').hover(function() {
    $(this).parent('.nav-item').addClass('hovered');
  }, function() {
    $(this).parent('.nav-item').removeClass('hovered');
  });
});



// Hamburger Icon 


if ($('.card .header').length === 0) {
  let headerCode = 
  `<header class="header">
      <div class="switch-holder">
      <div class="switch-label">
      <i class="fa-solid fa-paperclip" style="color: #383838;"></i><span>All Pages</span>
      </div>
      <div class="switch-toggle">
          <input type="checkbox" id="all-pages">
          <label for="all-pages"></label>
      </div>
    </div>
  </header>`;

    $('.card').prepend(headerCode);
}


// Sidebar Show/Hide

$('.switch-toggle input[type="checkbox"]').click(function() {
  let sidebar = $('.card-header');
  let toggleIcon = $('.switch-holder');
  sidebar.toggleClass('sidebarshow');
  toggleIcon.toggleClass('toggled');
});


$(function() {
  const navLinks = $(".nav-tabs > .nav-item > .nav-link");
  const cardBody = $(".tab-pane");

  navLinks.on("click", function() {
    // Get the active card body
    const activeCardBody = $(".tab-pane.active");

    // Check if the active card body is already visible
    if (activeCardBody.is(":visible")) {
      return; // No need to animate if already visible
    }

    // Hide all card bodies with animation
    cardBody.slideUp(400, function() {
      // Show the active card body with animation
      activeCardBody.slideDown(400);
    });
  });
});




