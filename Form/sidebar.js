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

$('.card-header .nav-link').each(function() {
  var clonedElement = $(this).clone().removeAttr('href');
  $(this).replaceWith(clonedElement);
});

$('.card-header .nav-link').click(function() {
  const clickedIndex = $(this).parent().index();
  
  $('.card-header .nav-link').removeClass('active').parent().removeClass('active');
  $(this).addClass('active').parent().addClass('active');

  $('.tab-pane').removeClass('active');
  $('.tab-pane').eq(clickedIndex).addClass('active');
});








