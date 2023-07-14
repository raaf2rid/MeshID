nextTab()

function nextTab() {
  const activeTab = $('.tab-pane.active');

  if (activeTab.length) {
    let nextTab = activeTab.nextAll('.tab-pane').not(':has(.formio-component:first-child.formio-hidden)').first();

    if (nextTab.length) {
      activeTab.removeClass('active').hide();
      nextTab.addClass('active').show();
      return;
    }

    // If no next tab without formio-hidden is found, do something (e.g., display a message)
  }
}




