const preview = document.querySelector(".preview")
const content = document.querySelector(".content")
const builder = document.querySelectorAll(".builder-component");

preview.style.display = 'none'
content.style.display = "none";


const logo = document.createElement("section");
logo.classList.add('logo', 'logo-fade-in')
logo.innerHTML = `
<img src="https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif" alt="">
`
preview.appendChild(logo);



const linkUrl = 'https://raw.githubusercontent.com/raaf2rid/MeshID/main/styles.css';

fetch(linkUrl)
  .then(response => response.text())
  .then(cssText => {
    const style = document.createElement('style');
    style.textContent = cssText;
    document.head.appendChild(style);

    preview.style.display = 'block'
    preview.querySelector('.logo').classList.add('logo-fade-out')
    setTimeout(() => {
      content.style.display = "block";
    }, 2000);

  })
  .catch(error => {
    console.error('Error fetching CSS:', error);
  });
