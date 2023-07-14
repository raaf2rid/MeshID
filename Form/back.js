let collection = document.querySelectorAll(".tab-pane");
const cardHeaderItem = document.querySelectorAll(
  ".card-header > ul > .nav-item"
);
const cardHeaderLink = document.querySelectorAll(
  ".card-header > ul > .nav-item > .nav-link"
);
let requiredFields = document.querySelectorAll(".field-required")
let currentTab = getCurrentTab()
let prevTab = currentTab - 1
const backBtn = document.querySelectorAll('.navigation-back > .navigation-back')
const nextBtn = document.querySelectorAll('.navigation-next > .navigation-next')


displayTab()
animation()

// NAVIGATION 

function displayTab(){
  collection[currentTab].style.display = "none"
  collection[prevTab].style.display = "block"

  collection[currentTab].classList.remove("active");
  collection[prevTab].classList.add("active");
  
  cardHeaderItem[currentTab].classList.remove("active");
  cardHeaderItem[prevTab].classList.add("active");

  cardHeaderLink[currentTab].classList.remove("active");
  cardHeaderLink[prevTab].classList.add("active");

if(collection[prevTab].children[0].classList.contains("formio-hidden")){
  collection[prevTab].style.display = "none"
  collection[prevTab].classList.remove("active");

  cardHeaderItem[prevTab].classList.remove("active");
  cardHeaderLink[prevTab].classList.remove("active");

  prevTab = prevTab - 1
  displayTab()
}
}

function getCurrentTab(){
  let current
  for(let i = 0; i < collection.length; i++){
   if(collection[i].style.display == "block"){
    current= i
   }
  }
  return current
}

// ANIMATION

function animation() {

  collection[prevTab].classList.add('back');
  disableButtons()
  setTimeout(removeAnimation, 700);
  function removeAnimation(){
    collection[prevTab].classList.remove('back');
    enableButtons()
  }
}

function disableButtons(){
let navigationBtn = document.querySelectorAll(".navigation")
for (let i=0; i<navigationBtn.length; i++){
  navigationBtn[i].disabled = true;
  navigationBtn[i].setAttribute("style", "opacity: 1");
}  
}

function enableButtons(){
  let navigationBtn = document.querySelectorAll(".navigation")
  for (let i=0; i<navigationBtn.length; i++){
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

setTimeout(()=>{
  document.querySelector(".card").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
},700)

