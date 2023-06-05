// Check if the script has already been loaded
if (!window.customization) {
  // Set the flag to indicate that the script is being loaded
  window.customization = true;

  // Create a new <script> element
  let customization = 'https://raw.githubusercontent.com/raaf2rid/MeshID/main/tabs.js';

  fetch(customization)
    .then(response => response.text())
    .then(scriptText => {
      // Create a <script> element
      const script = document.createElement('script');
      
      // Set the text content of the script
      script.textContent = scriptText;
      
      // Append the script element to the <body> or any other element
      document.body.appendChild(script);
    })
    .catch(error => {
      // Handle error if the script could not be fetched or loaded
      console.error('Error loading script:', error);
    });
}
