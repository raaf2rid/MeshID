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

document.querySelector('.preview .logo').style.display = 'none';


setTimeout(()=>{
  
  document.querySelector('.content').style.display = 'flex';
},500)