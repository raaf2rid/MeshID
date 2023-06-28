const previewElement = document.querySelector(".preview");
const contentElement = document.querySelector(".content");
const logo = document.querySelector(".preview .fade-out");
let cssLink = document.querySelector('link[href="https://raaf2rid.github.io/MeshID/styles.css"]');

// Check if the image has already been prepended
if (!logo) {
  // Create the image element
  const logoImage = document.createElement("img");
  logoImage.classList.add("logo", "fade-out");
  logoImage.src = "https://i.postimg.cc/wBmpBgcs/ezgif-com-gif-maker-1.gif";
  logoImage.alt = "";

  // Prepend the image element to the .preview element
  if (previewElement) {
    previewElement.prepend(logoImage);
  }
}

if (!cssLink) {
  fetch('https://raaf2rid.github.io/MeshID/styles.css')
    .then(response => {
      if (response.ok) {
        cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = "https://raaf2rid.github.io/MeshID/styles.css";
        contentElement.style.display = "flex";


        document.head.appendChild(cssLink);
      } else {
        throw new Error('Failed to fetch CSS file');
      }
    })
    .catch(error => {
      console.log('Error fetching or appending CSS:', error);
    });
}
