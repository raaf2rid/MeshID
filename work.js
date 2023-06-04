const cardHeader = document.querySelector(".card-header");
const card = document.querySelector(".card");
const cardBody = document.querySelectorAll(".tab-pane");
const head = document.querySelector("head");
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




/////
// Remix Icons
/////

const green = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(31,148,165,1)"/></svg>`;

const yellow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z" fill="rgba(241,196,14,1)"/></svg>`;

const grey = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" fill="rgba(98,98,98,1)"/></svg>`;

const redBox = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="24" style="margin-bottom:10px"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(249,113,113,1)"/></svg>`;

const greenBox = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="24" style="margin-bottom:10px"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(25,188,155,1)"/></svg>`;


const lock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-7 7.732V18h2v-2.268a2 2 0 1 0-2 0zM16 8V7a4 4 0 1 0-8 0v1h8z" fill="rgba(52,72,94,1)"/></svg>`

///// /////
// Tab Logic
///// /////

if (builder.length === 0) {
  parent.classList.add("parent");

  document.querySelector(".content").style.display = "block";
  

  
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
  


  const textFields = document.querySelectorAll('.formio-component-textfield:not(.formio-component-multiple) input, .formio-component-email input, .formio-component-datetime .flatpickr-input, .formio-component-number input');


  textFields.forEach(function(input) {
    const label = input.closest('.form-group').querySelector('label[for="' + input.id + '"]');

    if(label){

      input.addEventListener('input', function() {
        if (input.value !== '') {
          label.style.transform = 'translate(0)';
        } else {
          label.style.transform = 'translate(20px, 43px)';
        }
      });
  
      if (input.value !== '') {
        label.style.transform = 'translate(0)';
      } else {
        label.style.transform = 'translate(20px, 43px)';
      }

    }
  
    
  });

  
  const multiFields = document.querySelectorAll('.formio-component-multiple input');

  multiFields.forEach(function(input) {
    const label = input.closest('.form-group').querySelector('label[for="' + input.id + '"]');

    if(label){

  
   
    if(multiFields[0].value !== '') {
      label.style.transform = 'translate(0)';
      input.parentNode.parentNode.parentNode.querySelector('.formio-button-add-another').style.display = 'block'
    }
    else{
      label.style.transform = 'translate(30px, 57px)';
      input.parentNode.parentNode.parentNode.querySelector('.formio-button-add-another').style.display = 'none'
    }
    

    input.addEventListener('input', function() {
      if (multiFields[0].value !== '') {
        label.style.transform = 'translate(0)';
        input.parentNode.parentNode.parentNode.querySelectorAll('.btn-secondary').forEach(btn=>{
          btn.style.display = 'block'
        })
      
      } else {
        label.style.transform = 'translate(30px, 57px)';
        input.parentNode.parentNode.parentNode.querySelectorAll('.btn-secondary').forEach(btn=>{
          btn.style.display = 'none'
        })
      }
    });
  
  }
   
  });




  const dropdownFields = document.querySelectorAll('.formio-component-select select');

  dropdownFields.forEach(function(select) {


    const label = select.parentNode.parentNode.parentNode.querySelector('label[for="' + select.id + '"]');

    if(label){
    
    if (select.value !== '') {
      if(label){
        label.style.transform = 'translate(0)';
      }
    }else {
      if(label){

      label.style.transform = 'translate(20px, 43px)';
      }
    }
    

    select.addEventListener('change', ()=>{
      if (select.value !== '') {
        label.style.transform = 'translate(0)';
      } else {
        label.style.transform = 'translate(20px, 43px)';
      }
    })

  }

  });

 const countryCodes = document.querySelectorAll('.custom-code')

 countryCodes.forEach(comp=>{
  comp.querySelector('.formio-select-autocomplete-input').disabled = 'true'
 })

  
  if (!parent.children[1]) {
    const logo = document.createElement("section");
    parent.appendChild(logo);
    parent.querySelector(".formio-form").style.display = "none";

    tabs.style.display = "flex";
    tabs.style.justifyContent = "center";
    tabs.style.alignItems = "center";

    setTimeout(() => {
    
      formio.style.width = '35%';
      parent.querySelector("section").innerHTML = `
        <img class="logo" src="https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif" alt="">
        `;
    }, 0);

    setTimeout(() => {
      parent.querySelector(".formio-form").style.display = "block";
      parent.querySelector("section").innerHTML = "";
      tabs.style.display = "flex";
      formio.style.width = '65%';
    }, 2000);
  }




  if (!head.innerHTML.includes(customStyles)) {
    head.innerHTML += customStyles;
  }



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

///// /////
// Validations
///// /////

setTimeout(checkError, 1);


function checkError() {

  ////
        //EditGrid Validation Extra
        ////

        // Add the class "custom-error" to the formio component


        const editGrid = document.querySelectorAll(".formio-component-editgrid")

        editGrid.forEach(element=>{
          if(element.querySelectorAll("li").length > 1){
            element.classList.remove("custom-error");
            }
         if(element.classList.contains("formio-hidden")){
           element.classList.remove("custom-error");
          }
         if(element.classList.contains("formio-modified")){
          element.classList.remove("custom-error");
          }
        })

  cardBody.forEach((tab, i) => {
    let fields;

    let check;

    let boxes = [];

    let boxesEl;

    let fieldErrors;

    /////
    // Collecting all required fields
    /////

    fields = tab.querySelectorAll(".required");
    boxesEl = tab.querySelector(".validation");

    fields.forEach((element) => {

      /////
      // Error Checking
      /////

      if (!element.classList.contains("formio-hidden")) {
        boxes.push(element);

        /////
        // Text Area Components
        /////

        if (element.classList.contains("formio-component-textarea")) {
          

          if (!element.classList.contains("formio-modified")) {
            const text = element.querySelector("textarea");

            if (!text.textContent) {
              element.classList.add("custom-error");
            }
          } else if (element.classList.contains("has-error")) {
            element.classList.add("custom-error");
          } else {
            element.classList.remove("custom-error");
          }
        }

        /////
        // Survey Components
        /////

        ///////
        // Important: Rename the component from "survey" to something else and then add the following code to the "Advanced Conditions" of all survey components.


        
      //   if(Object.keys(data.tabContainerComp.APIKEY).length < 1){
      //     document.querySelector(`.formio-component-APIKEY`).classList.add("custom-error")
      //   }
      //   else{
      //     document.querySelector(`.formio-component-APIKEY`).classList.add("validated")
      //  }

        ///////

        if (element.classList.contains("formio-component-survey")) {
          
          if(element.querySelector("input").classList.length !== 0){
            if(!element.querySelector("input").classList.contains("is-invalid")){
              element.classList.remove("custom-error");
            }
          }
          }
          
            /////
        /// EditGrid Validation 
        /////

        if(element.classList.contains("formio-component-editGrid")) {
          
          if(element.classList.contains("formio-modified")){
            element.classList.remove("custom-error");
          }
          if(element.querySelectorAll("li").length > 1){
            element.classList.remove("custom-error");
            }
        }
        
          


        /////
        // Common Components
        /////

        check = element.querySelectorAll(
          "input, select, .radio, .checkbox, .form-group"
        );

        check.forEach((item) => {
          if (item.classList.contains("form-control")) {
            if (!item.value) {
              console.log("Invalid input");
              element.classList.add("custom-error");
            } else if (element.classList.contains("has-error")) {
              element.classList.add("custom-error");
            } else {
              element.classList.remove("custom-error");
            }
          }

          if (
            item.classList.contains("radio") ||
            item.classList.contains("checkbox")
          ) {
            let options = item.querySelectorAll("input[checked]");

            if (element.classList.contains("has-error")) {
              console.log("Invalid radio/checkbox");
              element.classList.add("custom-error");
            } else if (options.length === 0) {
              element.classList.add("custom-error");
            } else {
              element.classList.remove("custom-error");
            }
          }
        });
      }
    });

    /////
    // Red/Green Boxes
    /////

    fieldErrors = tab.querySelectorAll(".custom-error");

    if (builder.length == 0) {
      if (boxesEl) {
        let completed = boxes.length - fieldErrors.length;
        let notCompleted = fieldErrors.length;

        let completedArr = [];
        let notCompletedArr = [];

        for (let i = 0; i < completed; i++) {
          completedArr.push(greenBox);
        }
        for (let i = 0; i < notCompleted; i++) {
          notCompletedArr.push(redBox);
        }


        // ${completedArr.join("")} 
        // ${notCompletedArr.join("")} 

        
        /////
        // Sidebar Ticks
        /////

        if(errorFields.length !== 0){

       

          if (navLinks[navLinks.length - 1].innerHTML.includes("svg")) {
            const nav = navLinks[navLinks.length - 1].innerHTML.slice(
              0,
              navLinks[navLinks.length - 1].innerHTML.indexOf("<")
            );
            navLinks[navLinks.length - 1].innerHTML = nav + `${lock}`;
          } else {
            navLinks[navLinks.length - 1].innerHTML += ` ${lock}`;
          }
        }

        if (boxes.length - fieldErrors.length == 0) {

          if(data.tabContainerComp.selectALanguage == 'dutch'){
            boxesEl.innerHTML = `
            <div  class="boxes">
            ${yellow} Er zijn nog geen velden ingevuld 
            </div>`;
          }
          else{
            boxesEl.innerHTML = `
            <div  class="boxes">
            ${yellow} No fields(Mandatory) have yet been completed 
            </div>`;
          }

          
          



          if (navLinks[i].innerHTML.includes("svg")) {
            const nav = navLinks[i].innerHTML.slice(
              0,
              navLinks[i].innerHTML.indexOf("<")
            );
            navLinks[i].innerHTML = nav + ` ${yellow}`;
          } else {
            navLinks[i].innerHTML += ` ${yellow}`;
          }
        } else if (boxes.length - fieldErrors.length < boxes.length) {

          if(data.tabContainerComp.selectALanguage == 'dutch'){

          boxesEl.innerHTML = `
          <div  class="boxes">  
              
          ${grey} Er ontbreken nog steeds ${fieldErrors.length} velden informatie 
          </div>`;

          }
          else{

            boxesEl.innerHTML = `
          <div  class="boxes">  
          ${grey} There are still ${fieldErrors.length} fields(Mandatory) missing information 
          </div>`;

          }

          if(fieldErrors.length == 1){

            if(data.tabContainerComp.selectALanguage == 'dutch'){
              boxesEl.innerHTML = `
              <div  class="boxes">
                  
              ${grey} Er ontbreekt nog 1 veld informatie 
              </div>`;
            }
            else{
              
            boxesEl.innerHTML = `
            <div  class="boxes">
                
            ${grey} There is still 1 field(Mandatory) missing information 
            </div>`;
            }
           
          }

          if (navLinks[i].innerHTML.includes("svg")) {
            const nav = navLinks[i].innerHTML.slice(
              0,
              navLinks[i].innerHTML.indexOf("<")
            );
            navLinks[i].innerHTML = nav + ` ${grey}`;
          } else {
            navLinks[i].innerHTML += ` ${grey}`;
          }
        } else if (boxes.length - fieldErrors.length == boxes.length) {

          if(data.tabContainerComp.selectALanguage == 'dutch'){

            boxesEl.innerHTML = `
            <div  class="boxes">    
            ${green} Alle velden ingevuld 
            </div>`; 
              
          }
          else{
            boxesEl.innerHTML = `
            <div  class="boxes">    
            ${green} All fields(Mandatory) completed 
            </div>`;   
          }
   
          

          if (navLinks[i].innerHTML.includes("svg")) {
            const nav = navLinks[i].innerHTML.slice(
              0,
              navLinks[i].innerHTML.indexOf("<")
            );
            navLinks[i].innerHTML = nav + ` ${green}`;
          } else {
            navLinks[i].innerHTML += ` ${green}`;
          }
    
        }

        if(!fieldErrors.length){
          tab.querySelector(".navigation-next").classList.add("next-green")
        }else if(fieldErrors.length){
          tab.querySelector(".navigation-next").classList.remove("next-green")
        }



      }
    }
  });
}





setTimeout(()=>{

  const errorFields = document.querySelectorAll(".tab-pane:not(:last-child) .custom-error")
  
  
  
    if(errorFields.length !== 0){
      document.querySelector(".signee-details").classList.add('overlay')
      document.querySelector(".signee-details").style.padding = "1.25rem"
      document.querySelector(".tab-pane:last-child").style.padding = "0"


  
      if (navLinks[navLinks.length - 1].innerHTML.includes("svg")) {
        const nav = navLinks[navLinks.length - 1].innerHTML.slice(
          0,
          navLinks[navLinks.length - 1].innerHTML.indexOf("<")
        );
        navLinks[navLinks.length - 1].innerHTML = nav + `${lock}`;
      } else {
        navLinks[navLinks.length - 1].innerHTML += ` ${lock}`;
      }
      
    }
    else{
      document.querySelector(".signee-details").classList.remove('overlay')
      document.querySelector(".tab-pane:last-child").style.padding = "1.25rem"
      document.querySelector(".signee-details").style.padding = "0"
    }
  
  },5)


// Modal Close 




 








// Spinner for pdf 




// Function to show the spinner overlay

 // Check if the spinner overlay element already exists
const spinnerOverlay = tabs.querySelector('.spinner-overlay');
if (!spinnerOverlay) {
// Create the spinner overlay element
const spinnerOverlayElement = document.createElement('div');
spinnerOverlayElement.id = 'spinner-overlay';
spinnerOverlayElement.classList.add('spinner-overlay');

    // Create the spinner element
const spinner = document.createElement('div');
spinner.classList.add('spinner');
const loadingText = document.createElement('p');
loadingText.classList.add('loading-text');
loadingText.textContent = 'Downloading PDF. Please wait...'

// Create the spinner icon
const spinnerIcon = document.createElement('i');
spinnerIcon.classList.add('fas', 'fa-spinner', 'fa-spin');

// Append the spinner icon to the spinner element
spinner.appendChild(spinnerIcon);

// Append the spinner element to the spinner overlay element
spinnerOverlayElement.appendChild(spinner);
spinnerOverlayElement.appendChild(loadingText);

// Append the spinner overlay element to the card
tabs.appendChild(spinnerOverlayElement);
  }










// External Libraries




// Check if html2pdf.bundle.js script exists
if (!document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"]')) {
  const script1 = document.createElement('script');
  script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
  const existingScript = document.getElementsByTagName('script')[0];
  existingScript.parentNode.insertBefore(script1, existingScript);
}


// Check if the Font Awesome CSS file is already included
var fontAwesomeCSS = document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"]');

// If the Font Awesome CSS file is not found, add it to the document head
if (!fontAwesomeCSS) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  document.head.appendChild(link);
}



// API CALL 

const originalLink = window.location.href

const apiLink = originalLink.replace('meshid.app/verifications', 'meshid.app/api/verifications')

  fetch(apiLink)
  .then(response => response.json())
  .then(jsonData =>
  {
    //Entity

    data.name = jsonData.record.personData.MID_LP_Name
    data.type = jsonData.record.personData.MID_LP_Type
    data.countryLp = jsonData.record.personData.MID_LP_Country_Of_Registration
    data.dateLp = jsonData.record.personData.MID_LP_Date_Of_Registration
    data.regNumber = jsonData.record.personData.MID_LP_Number
    data.taxLp = jsonData.record.personData.MID_LP_Tax_Number
    data.regulated = jsonData.record.personData.MID_LP_Regulated
    data.regulator = jsonData.record.personData.MID_LP_Regulator
    data.tradeName = jsonData.record.personData.MID_LP_Trade_Name
    data.addressLp = jsonData.record.personData.MID_LP_Address
    data.cityLp = jsonData.record.personData.MID_LP_Address_City
    data.addressCountryLp = jsonData.record.personData.MID_LP_Address_Country
    data.postCodeLp = jsonData.record.personData.MID_LP_Postalcode


    //Natural Person

    data.first = jsonData.record.personData.MID_NP_First
    data.middle = jsonData.record.personData.MID_NP_Middle
    data.last = jsonData.record.personData.MID_NP_Last
    data.dob = jsonData.record.personData.MID_NP_DOB
    data.countryBirth = jsonData.record.personData.MID_NP_Country_Of_Birth
    data.nationality = jsonData.record.personData.MID_NP_Nationality
    data.countryResidence = jsonData.record.personData.MID_NP_Country_Of_Residence
    data.dualNationality = jsonData.record.personData.MID_NP_Dual_Nationality
    data.email = jsonData.record.personData.MID_NP_Email
    data.formerFirst = jsonData.record.personData.MID_NP_Former_First
    data.formerLast = jsonData.record.personData.MID_NP_Former_Last
    data.gender = jsonData.record.personData.MID_NP_Gender
    data.occupation = jsonData.record.personData.MID_NP_Occupation
    data.taxNp = jsonData.record.personData.MID_NP_Tax_ID_Number
    data.address = jsonData.record.personData.MID_NP_Address
    data.city = jsonData.record.personData.MID_NP_Address_City
    data.addressCountry = jsonData.record.personData.MID_NP_Address_Country
    data.postCode = jsonData.record.personData.MID_NP_Postalcode
  } )
  .catch(error => console.error(error));

