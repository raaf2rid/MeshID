
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

  collection[nextTab].classList.add("next");
  disableButtons();
  setTimeout(removeAnimation, 700);
  function removeAnimation() {
    collection[nextTab].classList.remove("next");
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




setTimeout(()=>{
  document.querySelector(".card").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
},700)

