const linkUrl = 'https://raw.githubusercontent.com/raaf2rid/MeshID/main/styles.css';

fetch(linkUrl)
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;

    document.head.appendChild(style)

  })
  .catch(error => {
    console.error('Error fetching CSS:', error);
  });


