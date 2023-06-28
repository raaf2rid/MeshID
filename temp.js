const previewElement = document.querySelector(".preview");

// Check if the image has already been prepended
if (!document.querySelector(".preview .logo")) {
  // Create the image element
  const logoImage = document.createElement("img");
  logoImage.className = "logo";
  logoImage.src = "https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif";
  logoImage.alt = "";

  // Prepend the image element to the .preview element

  if (previewElement) {
    previewElement.prepend(logoImage);
  }
}
