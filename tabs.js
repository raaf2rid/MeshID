//  Search String


// Check if the form has not yet been loaded
  // Perform the desired action
  const cardHeader = document.querySelector(".card-header");
  const card = document.querySelector(".card");
  const cardBody = document.querySelectorAll(".tab-pane");
  const navBar = document.querySelector(".card-header-tabs");
  const navItems = document.querySelectorAll(".nav-tabs > .nav-item");
  const navLinks = document.querySelectorAll(".nav-tabs> .nav-item > .nav-link");
  const cardHeaderUl = document.querySelector(".card-header > ul");
  const snackbar = document.querySelector("#snackbar");
  const formio = document.querySelector('.preview .content .wrapper formio');
  
  
  
  if (cardHeader) {
    if (!cardHeader.classList.contains("form-builder-group-header")) {
    }
  }
  
  cardHeader.style.display = 'none'
  
  if (card) {
    mediaQueriesCard();
    window.addEventListener("resize", mediaQueriesCard);
  }
  
  if (navBar) {
    navBar.style.flexDirection = "column";
  
  }
  
  if (cardBody) {
    let fields;
  
  
    cardBody[0].classList.remove('active')
    cardBody[0].style.display = 'none' 
    cardBody[1].classList.add('active')  
    cardBody[1].style.display = 'block' 
  
  
    
  
    cardBody.forEach((tab) => {
      if (tab.style.display == "block") {
        fields = tab.querySelectorAll(".required");
      }
  
      if (fields) {
        fields.forEach((item) => {
          if (item.classList.contains("formio-modified")) {
            item.classList.remove("formio-error-wrapper");
          }
        });
      }
    });
  
    cardBody.forEach((element, i) => {
      element.style.width = "100%";
  
    
    });
  }
  
  if (cardHeaderUl) {
    cardHeader.style.padding = "0";
    cardHeader.style.borderBottom = "0";
    cardHeader.style.borderBottomLeftRadius = "7px";
    cardHeader.style.background = "#fafafa";
    cardHeader.style.paddingBottom = "2em";
  
    if (!cardHeaderUl.classList.contains("loaded")) {
      cardHeaderUl.style.margin = "0";
      cardHeaderUl.classList.add("loaded");
      cardHeaderUl.insertAdjacentHTML(
        "beforebegin",
        '<p class="nav-header">All Pages</p>'
      );
      const navHeader = document.querySelector(".nav-header");
  
      mediaQueriesHeader(navHeader);
  
      window.addEventListener("resize", () => {
        mediaQueriesHeader(navHeader);
      });
    }
  }
  navItems.forEach((item) => {
    item.style.width = "100%";
    // item.style.borderBottom = "2px solid #F5F5F5"
  });
  
  navLinks.forEach((item) => {
    item.style.fontSize = "1.2rem";
    item.style.fontWeight = "700";
    item.style.border = "0";
    item.style.width = "100%";
    item.style.borderRadius = "0";
    item.style.borderRadius = "0";
    item.addEventListener("click", () => {
      animate();
    });
  });
  
  
  ///// /////
  // Functions
  ///// /////
  
  /////
  // Card Animation(Opacity+Translate)
  /////
  
  function animate() {
  card.classList.add("card-animation");
  disableButtons();
  setTimeout(removeAnimation, 800);
  
  function removeAnimation() {
    card.classList.remove("card-animation");
    enableButtons();
  }
  }
  
  /////
  // Sidebar buttons enabling/disabling for Card animation to work properly
  /////
  
  function disableButtons() {
  navLinks.forEach((item) => {
    item.style.pointerEvents = "none";
  });
  }
  
  function enableButtons() {
  navLinks.forEach((item) => {
    item.style.pointerEvents = "auto";
  });
  }
  
  ///// /////
  // Media Queries
  ///// /////
  
  /////
  // Card Display
  /////
  
  function mediaQueriesCard() {
  /////
  // Mobile Devices
  /////
  
  if (
    window.matchMedia("(min-width: 200px)").matches &&
    window.matchMedia("(max-width: 600px)").matches
  ) {
    card.style.flexDirection = "column";
  }
  
  /////
  // Large Screen
  /////
  else {
    card.style.flexDirection = "row";
  }
  }
  
  /////
  // Navbar Styling
  /////
  
  function mediaQueriesHeader(navHeader) {
  /////
  // Mobile Devices
  /////
  
  if (
    window.matchMedia("(min-width: 200px)").matches &&
    window.matchMedia("(max-width: 600px)").matches
  ) {
    navHeader.style.borderTopRightRadius = "5px";
    navHeader.style.textAlign = "center";
    navHeader.style.paddingLeft = "10px";
    cardHeader.style.textAlign = "center";
    snackbar.style.left = "37%";
    cardHeader.style.borderBottom = "5px solid #f5f5f5";
    cardHeader.style.borderRight = "0";
    formio.style.width = '100%';
  
  
  }
  
  /////
  // Large Screen
  /////
  else {
    cardHeader.style.borderRight = "5px solid #f5f5f5";
    cardHeader.style.borderBottom = "0";
    cardHeader.style.width = "570px";
    card.style.minHeight = "670px";
    navHeader.style.borderTopRightRadius = "0";
    navHeader.style.textAlign = "start";
    cardHeader.style.textAlign = "start";
    navHeader.style.paddingLeft = "18px";
    snackbar.style.left = "53%";
    formio.style.width = '65%';
  
  }
  }

