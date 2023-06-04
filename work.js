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




