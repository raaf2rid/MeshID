function nextTab() {
  const activeTab = $('.tab-pane.active');

  if (activeTab.length) {
    const nextTab = activeTab.nextAll('.tab-pane').not(':has(.formio-component:first-child.formio-hidden)').first();

    if (nextTab.length) {
      activeTab.slideToggle('slow', function() {
        activeTab.removeClass('active');
        nextTab.addClass('active').slideToggle('slow');
      });

      const activeIndex = $('.tab-pane').index(nextTab);
      $('.card-header .nav-item').removeClass('active').eq(activeIndex).addClass('active');
      $('.card-header .nav-link').removeClass('active').eq(activeIndex).addClass('active');

      return;
    }

    // If no next tab without formio-hidden is found, do something (e.g., display a message)
  }
}

// Call the nextTab function
nextTab();
