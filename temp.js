let cssLink = document.querySelector('link[href="https://raaf2rid.github.io/MeshID/styles.css"]');
if (!cssLink) {
  fetch('https://raaf2rid.github.io/MeshID/styles.css')
    .then(response => {
      if (response.ok) {
        cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = "https://raaf2rid.github.io/MeshID/styles.css";
        document.head.appendChild(cssLink);
      } else {
        throw new Error('Failed to fetch CSS file');
      }
    })
    .catch(error => {
      console.log('Error fetching or appending CSS:', error);
    });
} 