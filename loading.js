// Create the image element
const logoImage = document.createElement("img");
logoImage.className = "logo";
logoImage.src = "https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif";
logoImage.alt = "";

// Prepend the image element to the .preview element
const previewElement = document.querySelector(".preview");
if (previewElement) {
  previewElement.prepend(logoImage);
}

document.querySelector('.preview').style.display = 'flex';


setTimeout(()=>{
  logoImage.classList.add('fade-out')
  setTimeout(()=>{
    logoImage.style.display = 'none'
  },2000)
},2000)