updateSidebar()

function updateSidebar() {


    const tab = $('.tab-pane').not(':has(.formio-component:first-child.formio-hidden)');
    
    if (tab.length) {

      const tabIndex = tab.index()
      
      $('.card-header .nav-item').eq(tabIndex).show();
      
      // Hide all other .card-header .nav-item
      $('.card-header .nav-item').not(`:eq(${tabIndex})`).hide();
      
      return;
    }
    
  
}
