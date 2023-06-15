const scriptUrl = 'https://raw.githubusercontent.com/raaf2rid/MeshID/main/customComps.js';

function isScriptLoaded(url) {
  return Array.from(document.getElementsByTagName('script')).some(script => script.src === url);
}

if (!isScriptLoaded(scriptUrl)) {
  fetch(scriptUrl)
    .then(response => response.text())
    .then(jsText => {
      const script = document.createElement('script');
      script.textContent = jsText;

      document.body.appendChild(script);
    })
    .catch(error => {
      console.error('Error fetching JavaScript:', error);
    })
    .finally(() => {
      // Code to execute after script has been loaded
    });
}
