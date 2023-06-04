  // Variable to track whether the form has been loaded
let formLoaded = false;

// Check if the form has not yet been loaded
if (!formLoaded) {
  // Perform the desired action
  const preview = document.querySelector(".preview")

preview.style.display = 'none'


// Create a new <script> element
let script = 'https://raw.githubusercontent.com/raaf2rid/MeshID/main/loading.js'



fetch(script)
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

  // Set the variable to true to indicate that the form has been loaded
  formLoaded = true;
}

// If the form has already been loaded, nothing will happen
