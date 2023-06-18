// MeshID Custom


const cardHeader = document.querySelector(".card-header");
const card = document.querySelector(".card");
const cardBody = document.querySelectorAll(".tab-pane");
const navBar = document.querySelector(".card-header-tabs");
const navItems = document.querySelectorAll(".nav-tabs > .nav-item");
const navLinks = document.querySelectorAll(".nav-tabs> .nav-item > .nav-link");
const builder = document.querySelectorAll(".builder-component");
const cardHeaderUl = document.querySelector(".card-header > ul");
const snackbar = document.querySelector("#snackbar");
const tabs = document.querySelector(".wrapper");
const formioWrapper = document.querySelector(".formio-wrapper");
let parent = document.querySelector(".formio-component-form").parentElement;
const child = document.querySelector(".formio-component-form");

const errorFields = document.querySelectorAll(".tab-pane:not(:last-child) .custom-error")
const backBtn = document.querySelectorAll('.navigation-back > .navigation-back')
const nextBtn = document.querySelectorAll('.navigation-next > .navigation-next')
const formio = document.querySelector('.preview .content .wrapper formio');
  
  
  
  if (builder.length === 0) {
    parent.classList.add("parent");
    
  
    
  //Button Style 
  
  backBtn.forEach(item=>{
  
    item.classList.remove('btn', 'btn-secondary', 'btn-md', 'btn-block');
  
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z" fill="rgba(110,121,116,1)"></path></svg>`
  })
  
  
  
    
    nextBtn.forEach(item=>{
      item.classList.remove('btn', 'btn-success', 'btn-md', 'btn-block', 'btn-danger', 'submit-fail');
      item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
      <rect x="10" y="10" width="180" height="60" rx="30" ry="30" fill="#d5d5d5" stroke="black" stroke-width="2"></rect>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" font-weight="bold">Next</text>
    </svg>
    `
    if(item.classList.contains("review")){
      item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
      <rect x="10" y="10" width="180" height="60" rx="10" ry="10" fill="#d5d5d5" stroke="black" stroke-width="2"></rect>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" font-weight="bold">Review and Sign</text>
    </svg>
    `
    }
    }) 
    
  
  
  
  
  
  
    if (!parent.children[1]) {
      const logo = document.createElement("section");
      parent.appendChild(logo);
      parent.querySelector(".formio-form").style.display = "none";
  
     
  
      setTimeout(() => {
      
        formio.style.width = '35%';
        parent.querySelector("section").innerHTML = `
          <img class="logo" src="https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif" alt="">
          `;
      }, 0);
  
      setTimeout(() => {
        parent.querySelector(".formio-form").style.display = "block";
        parent.querySelector("section").innerHTML = "";
        tabs.style.display = "block";
        formio.style.width = '65%';
      }, 2000);
    }
  
  
  
    cardBody[0].classList.remove('active')
    cardBody[0].style.display = 'none'
      
    cardBody[1].classList.add('active')
    cardBody[1].style.display = 'block'
    
    
    cardBody.forEach((tab, i)=>{
    
      if(i !== 0 && i !== 1 && tab.classList.contains('active')){
      cardBody[1].classList.remove('active')
      cardBody[1].style.display = 'none'
    
      }
    
    })
  
  
  
    if (cardHeader) {
      if (!cardHeader.classList.contains("form-builder-group-header")) {
      }
    }
  
    if (card) {
      mediaQueriesCard();
      window.addEventListener("resize", mediaQueriesCard);
    }
  
    if (navBar) {
      navBar.style.flexDirection = "column";
  
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
  }


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