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



// Card Animation 

$(function() {
  const navLinks = $(".nav-tabs > .nav-item > .nav-link");
  const cardBody = $(".tab-pane");

  navLinks.on("click", function() {
    // Get the active card body
    const activeCardBody = $(".tab-pane.active");

    // Stop any ongoing animation on the active card body
    activeCardBody.stop(true, true);

    // Hide the active card body using jQuery animation
    activeCardBody.hide(600, 'linear', function() {
      // Show the clicked card body using jQuery animation
      const targetCardBody = $(this).removeClass("active").siblings(".tab-pane").eq(navLinks.index(this));
      targetCardBody.show(600, 'linear', function() {
        // Add the "active" class to the clicked card body
        $(this).addClass("active");
      });
    });
  });
});

