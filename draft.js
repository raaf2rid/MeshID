// Check if the script has already been loaded
if (!window.loading) {
  // Set the flag to indicate that the script is being loaded
  window.loading = true;


// Create a new <script> element
let loadingScript = 'https://raw.githubusercontent.com/raaf2rid/MeshID/main/loading.js'
  // Perform the desired action


const preview = document.querySelector(".preview")

preview.style.display = 'none'


fetch(loadingScript)
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



