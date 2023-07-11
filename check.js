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



const green = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(31,148,165,1)"/></svg>`;

const yellow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z" fill="rgba(241,196,14,1)"/></svg>`;

const grey = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" fill="rgba(98,98,98,1)"/></svg>`;

const redBox = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="24" style="margin-bottom:10px"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(249,113,113,1)"/></svg>`;

const greenBox = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="24" style="margin-bottom:10px"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(25,188,155,1)"/></svg>`;


const lock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-7 7.732V18h2v-2.268a2 2 0 1 0-2 0zM16 8V7a4 4 0 1 0-8 0v1h8z" fill="rgba(52,72,94,1)"/></svg>`





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
            ${yellow} Er zijn nog geen verplichte velden ingevuld

            </div>`;
          }
          else{
            boxesEl.innerHTML = `
            <div  class="boxes">
            ${yellow} No mandatory fields have yet been completed 
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
              
          ${grey} Er zijn nog steeds ${fieldErrors.length} verplichte velden die informatie missen
          </div>`;

          }
          else{

            boxesEl.innerHTML = `
          <div  class="boxes">  
          ${grey} There are still ${fieldErrors.length} mandatory fields missing information 
          </div>`;

          }

          if(fieldErrors.length == 1){

            if(data.tabContainerComp.selectALanguage == 'dutch'){
              boxesEl.innerHTML = `
              <div  class="boxes">
                  
              ${grey} Er is nog 1 verplicht veld ontbrekende informatie
              </div>`;
            }
            else{
              
            boxesEl.innerHTML = `
            <div  class="boxes">
                
            ${grey} There is still 1 mandatory field missing information 
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
            ${green} Alle verplichte velden ingevuld
            </div>`; 
              
          }
          else{
            boxesEl.innerHTML = `
            <div  class="boxes">    
            ${green} All mandatory fields completed 
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







  

 



