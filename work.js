
const collection = document.querySelectorAll(".tab-pane");
const cardHeaderItem = document.querySelectorAll(
  ".card-header > ul > .nav-item"
);
const cardHeaderLink = document.querySelectorAll(
  ".card-header > ul > .nav-item > .nav-link"
);
const backBtn = document.querySelectorAll('.navigation-back > .navigation-back')
const nextBtn = document.querySelectorAll('.navigation-next > .navigation-next')




let toastMsg = document.getElementById("snackbar-message");
let currentTab = getCurrentTab();
let nextTab = currentTab + 1;
let error = checkError();

if (error) {
  console.log("Please fill in all the fields!");

  toast();

  return;
}

displayTab();
animation();

//  TOAST

function toast() {
  const snackbar = document.getElementById("snackbar");
  snackbar.style.display = "flex";

  setTimeout(() => {
    snackbar.style.display = "none";

  }, 3000);
}

// VALIDATION

function checkError() {
  let fields;

  let check;

  let editGrid;

  let result = false;

  collection.forEach((tab) => {
    if (tab.style.display == "block") {
      fields = tab.querySelectorAll(".required");
    }
  });

  if (fields) {
    fields.forEach((element) => {

      if (element.classList.contains("has-error")) {
        element.classList.add("formio-error-wrapper")
        result = true;
      }
      if (element.classList.contains("custom-error")) {
        element.classList.add("formio-error-wrapper")
        result = true;
      }
      if (element.classList.contains("has-message")) {
        result = true;
      }
      if (element.classList.contains("formio-error-wrapper")) {
        result = true;
      }

      if (!element.classList.contains("formio-hidden")) {

        if(element.classList.contains("formio-component-textarea")){

          if(!element.classList.contains("formio-modified")){

            const text = element.querySelector("textarea")

            if(!text.textContent){
              result = true
              element.classList.add("formio-error-wrapper")
            }
          } 
      } 


      if (element.classList.contains("formio-component-survey")) {
          

        if(element.querySelector("input").classList.length == 0 && !element.classList.contains("validated")){
          result = true
          element.classList.add("formio-error-wrapper")
        }

        
      }

        check = element.querySelectorAll(
          "input, select, .radio, .checkbox, .form-group"
        );
        check.forEach((item) => {
          if (item.classList.contains("form-control")) {
            if (!item.value) {
              console.log("Invalid input");
              result = true;
              element.classList.add("formio-error-wrapper")

            }
          } else if (
            item.classList.contains("radio") ||
            item.classList.contains("checkbox")
          ) {

            if(!element.classList.contains("formio-component-address")){
              let options = item.querySelectorAll("input[checked]");
              if (options.length === 0) {
                console.log("Invalid radio/checkbox");
                result = true;
                element.classList.add("formio-error-wrapper")
              }
            }

          } else if (element.classList.contains("form-group")) {
            console.log(element)
            collection.forEach((tab) => {
              if (tab.style.display == "block") {
                console.log(tab)
                editGrid = tab.querySelector(".editgrid-actions");
                console.log(editGrid)
                if (!editGrid) {

                  if(data.tabContainerComp.selectALanguage == 'dutch'){
                    toastMsg.textContent =
                    "Controleer het formulier en corrigeer alle fouten voordat u verder gaat!";
                  }
                  else{
                    toastMsg.textContent =
                    "Please check the form and correct all errors before proceeding!";
                  }

                  
                    return;
                }   
                else {
                  console.log("Save Edit Grid");

                  if(data.tabContainerComp.selectALanguage == 'dutch'){
                    toastMsg.textContent =
                    "Sla alle rijen op of corrigeer andere fouten voordat u verder gaat";
                  }
                  else{
                    toastMsg.textContent =
                    "Please save all the rows or correct other errors before proceeding";
                  }

                  result = true;
                }
              }

            });
          }
        });
      }
      return result;
    });
  }

  return result;
}

// NAVIGATION

function displayTab() {

  if (collection) {
    collection.forEach((element, i) => {
      element.style.width = "100%";
      if (element.children[0].classList.contains("formio-hidden")) {
        cardHeaderItem[i].style.display = "none";
      }
      else if(!element.children[0].classList.contains("formio-hidden")){
        cardHeaderItem[i].style.display = "block";
      }
    });
  }


  collection[currentTab].style.display = "none";
  collection[nextTab].style.display = "block";
  collection[nextTab].querySelector('input').focus()

  collection[currentTab].classList.remove("active");
  collection[nextTab].classList.add("active");

  cardHeaderItem[currentTab].classList.remove("active");
  cardHeaderItem[nextTab].classList.add("active");

  cardHeaderLink[currentTab].classList.remove("active");
  cardHeaderLink[nextTab].classList.add("active");

  if (collection[nextTab].children[0].classList.contains("formio-hidden")) {
    collection[nextTab].style.display = "none";
    collection[nextTab].classList.remove("active");
    cardHeaderItem[nextTab].classList.remove("active");
    cardHeaderLink[nextTab].classList.remove("active");

    nextTab = nextTab + 1;

    displayTab();
  }
}

function getCurrentTab() {
  let current;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].style.display == "block") {
      current = i;
    }
  }
  return current;
}

// ANIMATION

function animation() {
  let collection = document.getElementsByClassName("card");
  collection[0].classList.remove("back");
  collection[0].classList.add("next");
  disableButtons();
  setTimeout(removeAnimation, 700);
  function removeAnimation() {
    let collection = document.getElementsByClassName("card");
    collection[0].classList.remove("next");
    enableButtons();
  }
}

function disableButtons() {
  let navigationBtn = document.querySelectorAll(".navigation");
  for (let i = 0; i < navigationBtn.length; i++) {
    navigationBtn[i].disabled = true;
    navigationBtn[i].setAttribute("style", "opacity: 1");
  }
}

function enableButtons() {
  let navigationBtn = document.querySelectorAll(".navigation");
  for (let i = 0; i < navigationBtn.length; i++) {
    navigationBtn[i].disabled = false;
  }
}


  backBtn.forEach(item=>{
    item.classList.remove('btn', 'btn-secondary', 'btn-md', 'btn-block');
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z" fill="rgba(110,121,116,1)"></path></svg>`
  }) 


if(data.tabContainerComp.selectALanguage == 'english'){

  
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
else if(data.tabContainerComp.selectALanguage == 'dutch'){

  
  nextBtn.forEach(item=>{
    item.classList.remove('btn', 'btn-success', 'btn-md', 'btn-block', 'btn-danger', 'submit-fail');
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
    <rect x="10" y="10" width="180" height="60" rx="30" ry="30" fill="#d5d5d5" stroke="black" stroke-width="2"></rect>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" font-weight="bold">Volgende</text>
  </svg>
  `
  if(item.classList.contains("review")){
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="143" height="80">
    <rect x="10" y="10" width="187" height="60" rx="10" ry="10" fill="#d5d5d5" stroke="black" stroke-width="2"></rect>
    <text x="53%" y="53%" dominant-baseline="middle" text-anchor="middle" font-size="13" font-weight="bold">Beoordelen en ondertekenen</text>
    
    
  </svg>
  `
  }
  }) 
  

}


document.querySelector(".card .tab-pane.active").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });