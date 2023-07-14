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

    // Remove any ongoing animations and clear queue for the active card body
    activeCardBody.stop(true, true);

    // Perform the jQuery animation on the active card body
    activeCardBody.animate(
      {
        opacity: 0, // Animate opacity to 0 (fade out)
        height: 0 // Animate height to 0 (collapse)
      },
      600, // Animation duration in milliseconds
      'linear', // Easing function
      function() {
        // After animation is complete, show the clicked card body
        const targetCardBody = $(this)
          .removeClass("active")
          .siblings(".tab-pane")
          .eq(navLinks.index(this));
        
        targetCardBody
          .css({ opacity: 0, height: 'auto' }) // Set initial CSS properties
          .animate(
            { opacity: 1, height: targetCardBody.outerHeight() }, // Animate opacity to 1 and height to target height
            600, // Animation duration in milliseconds
            'linear', // Easing function
            function() {
              // Add the "active" class to the clicked card body
              $(this).addClass("active");
            }
          );
      }
    );
  });
});


