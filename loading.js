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
  document.querySelector('.preview .logo').classList.add('fade-out')
},2000)