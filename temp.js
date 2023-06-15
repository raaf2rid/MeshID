const scriptUrl = 'https://raw.githubusercontent.com/raaf2rid/MeshID/main/tabs.js';
let scriptElement = null;

function removeScript(url) {
  const scripts = Array.from(document.getElementsByTagName('script'));
  const scriptToRemove = scripts.find(script => script.src === url);

  if (scriptToRemove) {
    scriptToRemove.parentNode.removeChild(scriptToRemove);
  }
}

removeScript(scriptUrl);


