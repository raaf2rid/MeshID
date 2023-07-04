const card = document.querySelector(".card");
const cardBody = document.querySelectorAll(".tab-pane");
const builder = document.querySelectorAll(".builder-component");
const snackbar = document.querySelector("#snackbar");
const tabs = document.querySelector(".wrapper");
const formioWrapper = document.querySelector(".formio-wrapper");
let parent = document.querySelector(".formio-component-form").parentElement;
const child = document.querySelector(".formio-component-form");

const cardHeader = document.querySelector(".card-header");
const cardHeaderUl = document.querySelector(".card-header > ul");
const navBar = document.querySelector(".card-header-tabs");
const navItems = document.querySelectorAll(".nav-tabs > .nav-item");
const navLinks = document.querySelectorAll(".nav-tabs> .nav-item > .nav-link");



const errorFields = document.querySelectorAll(".tab-pane:not(:last-child) .custom-error")
const formio = document.querySelector('.preview .content .wrapper formio');
  
  
  
    cardBody[0].classList.remove('active')
    cardBody[0].style.display = 'none'
    cardBody[1].classList.add('active')
    cardBody[1].style.display = 'block'
    
    
    cardBody.forEach((tab, i)=>{
    
      if(i !== 0 && i !== 1 && tab.classList.contains('active')){
      cardBody[1].classList.remove('active')
      cardBody[1].style.display = 'none'
      navItems[1].classList.remove('active');
      navLinks[1].classList.remove('active');
      }
    
    })
  

  
    if (card) {
      mediaQueriesCard();
      window.addEventListener("resize", mediaQueriesCard);
    }
  
  
  
    if (cardBody) {
      let fields;
  
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
  
        disableButtons()
  
        setTimeout(()=>{
          enableButtons
        },850)
  
      
      });
    }
  
    if (cardHeaderUl) {
      cardHeader.style.padding = "0";
      cardHeader.style.borderBottom = "0";
      cardHeader.style.background = "transparent;"
  
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
    navItems.forEach((item, i) => {

      item.style.width = "100%";
      navItems[0].style.display = 'none'
      navItems[0].classList.remove('active') 
     
    });
  
    navLinks.forEach((item) => {
      item.style.fontSize = "1.2rem";
      item.style.fontWeight = "700";
      item.style.border = "0";
      item.style.width = "100%";
      item.style.borderRadius = "0";
      item.style.borderRadius = "0";
      item.style.pointerEvents = "auto";
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


  cardBody.forEach(tab=>{
    if(tab.classList.contains('active')){
      tab.classList.add("card-animation");
      disableButtons();
      setTimeout(removeAnimation, 800);
    
      function removeAnimation() {
        enableButtons();
        tab.classList.remove("card-animation");
      }
    }
  })


  
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






