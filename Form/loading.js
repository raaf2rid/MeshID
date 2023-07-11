const previewElement = document.querySelector(".preview");
const contentElement = document.querySelector(".content");
const logo = document.querySelector(".preview .logo");

// Check if the image has already been prepended
if (!logo) {
  // Create the image element
  const logoImage = document.createElement("img");
  logoImage.classList.add("logo", "fade-out");
  logoImage.src = "https://i.postimg.cc/wBmpBgcs/ezgif-com-gif-maker-1.gif";
  logoImage.alt = "";



  // Prepend the image element to the .preview element
  if (previewElement) {
    previewElement.prepend(logoImage);
  }
}

if (!document.querySelector('link[href="https://raaf2rid.github.io/MeshID/Form/styles.css"]')) {

  fetch('https://raaf2rid.github.io/MeshID/Form/styles.css')
    .then(response => {
      if (response.ok) {
        let cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = "https://raaf2rid.github.io/MeshID/Form/styles.css";

        var script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/7615e5cc93.js';
        script.crossOrigin = 'anonymous';

  

        if (!document.querySelector('link[href="https://raaf2rid.github.io/MeshID/Form/styles.css"]')){
          document.head.append(cssLink, script);
        }


        // Listen for the CSS file to load
        cssLink.addEventListener("load", () => {
          contentElement.style.display = "flex";            
          addHeaderHideAdminTab()
        });


        const logo = document.querySelector(".preview .fade-out");
        logo.addEventListener("animationend", () => {
          logo.remove()
        });
      

      } else {
        throw new Error('Failed to fetch CSS file');
      }
    })
    .catch(error => {
      console.log('Error fetching or appending CSS:', error);
    });

  }
  else{

    const logo = document.querySelector(".preview .fade-out");
    logo.addEventListener("animationend", () => {
      logo.remove()
    });
    contentElement.style.display = "flex";      
    addHeaderHideAdminTab()
  }


  function addHeaderHideAdminTab(){

    const cardBody = $(".tab-pane");
    const navItems = $(".nav-tabs > .nav-item");
    const navLinks = $(".nav-tabs > .nav-item > .nav-link");

    if ($(".nav-header").length === 0) {
      $(".card-header > ul").before('<p class="nav-header">All Pages</p>');
    }
    
    $('li.nav-item a[href="#admin"]').parent('li.nav-item').removeClass('active');
    $('li.nav-item a[href="#admin"]').removeClass('active');
    $(cardBody[0]).hide()
    $(cardBody[0]).removeClass("active");
    $(cardBody[1]).css("display", "block");
    $(cardBody[1]).addClass("active");
    $(navItems[1]).addClass("active");
    $(navLinks[1]).addClass("active");

  }


  