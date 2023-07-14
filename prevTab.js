prevTab()

function prevTab() {
  const activeTab = $('.tab-pane.active');
  
  if (activeTab.length) {
    let prevTab = activeTab.prevAll('.tab-pane').not(':has(.formio-component:first-child.formio-hidden)').first();

    if (prevTab.length) {
      activeTab.hide().removeClass('active');
      prevTab.show().addClass('active');
      return;
    }

    // If no previous tab without formio-hidden is found, do something (e.g., display a message)
  }
}
