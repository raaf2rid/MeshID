const preview = document.querySelector(".preview")
const content = document.querySelector(".content")
const builder = document.querySelectorAll(".builder-component");


preview.style.display = "none";
const logo = document.createElement("section");
logo.innerHTML = `
<img class="logo" src="https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif" alt="">
`
preview.appendChild(logo);


if (builder.length === 0) {

  preview.style.display = "block";




}