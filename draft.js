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