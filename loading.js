const previewElement = document.querySelector(".preview");
const contentElement = document.querySelector(".content");
let cssLink = document.querySelector('link[href="https://raaf2rid.github.io/MeshID/styles.css"]');

// Check if the image has already been prepended
if (!logo) {
  // Create the image element
  const logoImage = document.createElement("img");
  logoImage.classList.add("logo", "fade-out");
  logoImage.src = "https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif";
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
        document.head.appendChild(cssLink);

        setTimeout(()=>{
          const logo = document.querySelector(".preview .fade-out")
          const contentElement = document.querySelector(".content");
          logo.style.display = 'none'; // Hide the element after the animation completes
          contentElement.style.display = 'flex';
        },3000)
        
      } else {
        throw new Error('Failed to fetch CSS file');
      }
    })
    .catch(error => {
      console.log('Error fetching or appending CSS:', error);
    });
} 

