

/////
// constiables
/////

const cardHeader = document.querySelector(".card-header");
const card = document.querySelector(".card");
const cardBody = document.querySelectorAll(".tab-pane");
const head = document.querySelector("head");
const navBar = document.querySelector(".card-header-tabs");
const navItems = document.querySelectorAll(".nav-tabs > .nav-item");
const navLinks = document.querySelectorAll(".nav-tabs> .nav-item > .nav-link");
const builder = document.querySelectorAll(".builder-component");
const cardHeaderUl = document.querySelector(".card-header > ul");
const snackbar = document.querySelector("#snackbar");
const tabs = document.querySelector(".wrapper");
const formioWrapper = document.querySelector(".formio-wrapper");
let parent = document.querySelector(".formio-component-form").parentElement;
const child = document.querySelector(".formio-component-form");

const errorFields = document.querySelectorAll(".tab-pane:not(:last-child) .custom-error")
const backBtn = document.querySelectorAll('.navigation-back > .navigation-back')
const nextBtn = document.querySelectorAll('.navigation-next > .navigation-next')
const formio = document.querySelector('.preview .content .wrapper formio');


// const fields = document.querySelectorAll(".required");

/////
// Adding Custom Stylesheet to the head
/////

const customStyles = 
`
<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300;1,400;1,700&display=swap");

  
/* Autofill Custom */


input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: #383838 !important;
  -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
  transition: background-color 5000s ease-in-out 0s !important;
}



/* Autofill Custom */


  /* Dutch Banking */
  
  .glossary{
      padding: 1em;
      padding-bottom:3em;
      height: 1400px;
    }

  .arrow{
    display: none !important;
  }
    
  .carousel-indicators{
    display: none;
  }

  .formio-form[ref="webform"]{
    padding-bottom: 40px !important;
  }

  .formio-component-cp .form-text error{
    display: none;
  }

  .preview div[role="form"][aria-label="Container"] {
    height: 100%;
  }
  
  .preview .content .wrapper {
    display: flex;
    align-items: baseline !important;
    padding: 4rem 2rem !important;
    height: 100vh;
    overflow-x: hidden;
  }

  .preview .card {
  border: none;
  border-radius: 0 !important;
  min-height: max-content !important;
  }
  
  .preview .card-body {
  padding: 0 !important;
  }
  
  
  .preview .content {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    top: 0vh !important;
    left: 0vw !important;
    background-color: #fff !important;
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
  }
  
  .preview .content .form-type-heading {
    display: none !important;
  }.preview div[role="form"][aria-label="Container"] {
  height: 100%;
  }
  
 
  
  .preview .card {
  border: none;
  border-radius: 0 !important;
  min-height: max-content !important;
  }
  
  .preview .card-body {
  padding: 0 !important;
  }
  
  
  .preview .content {
  position: relative !important;
  width: 100% !important;
  height: 100% !important;
  top: 0vh !important;
  left: 0vw !important;
  background-color: #fff !important;
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  }
  
  .form-type-heading:nth-child(1) {
  display: none !important;
  }

  .glossary-panel .text-muted{
    color: #DD6921 !important;
    font-size: 25px !important;
  }

  .glossary-panel .card-title{
    display: block !important;
    text-align: center !important;
  }

  .preview .get-started button{
    background-color: #DD6921;
    border: 3px solid #DD6921;
    box-shadow: none !important;
  }

  .preview .get-started button {
    width: 250px;
    height: 65px;
    border-radius: 50px !important;
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .preview .get-started button:hover,
  .preview .get-started button:active {
    background: #fff !important;
    border: 3px solid #DD6921 !important;
    color: #DD6921 !important;
  }

  .middle .pen span:before {
    content:  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z' fill='%23ddc69d'/%3E%3C/svg%3E");
    ;
  }

  /* Global */

  html {
    overflow: hidden;
  }

  figure {
    display: flex;
    justify-content: center;
  }

  figure table,
  figure td {
    border: none !important;
  }

  #confirm_template_mode {
    padding: 0 1rem !important;
  }

  .preview .row .col-sm-2 {
    display: none !important;
  }

  .preview .row .col-sm-2:nth-child(1),
  .preview .row .col-sm-2:nth-child(2),
  .preview .row .col-sm-2:last-child {
    display: block !important;
  }

  /* Validation */

  .boxes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.9rem;
    margin: 10px 0;
    font-weight: 600;
    letter-spacing: 0.7px;
  }

  .preview .boxes svg {
    margin-right: 5px;
  }

  /* Disclaimer */

  .preview .have-read,
  .preview .have-read span {
    cursor: pointer !important;
    font-size: 1rem;
  }

  .preview .have-read input {
    cursor: pointer !important;
    width: 25px;
    height: 17px;
    transform: translateX(-8px);
}

  .card {
    font-family: "Lato", sans-serif;
  }

  .sourceOfWealth td {
    vertical-align: inherit;
  }

  .logo {
    width: 100%;
  }

  svg {
    width: 18px;
    height: 18px;
    transform: translate(2px, 1px);
  }

  /* Navbar */

  .nav-header {
    background: rgba(31, 148, 165, 1);
    color: #fff;
    font-size: 1.1rem;
    border-radius: 0;
    border-top-left-radius: 7px;
    padding: 8px;
    width: 100%;
    text-align: start;
    padding-left: 18px;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 0;
  }

  .parent .nav-link:hover {
    background: #e8e86a;
    color: #495057;
  }

  a svg {
    transform: translateY(-2px);
  }

  /* Introduction + Type of Entity  */

  .custom-button,
  .custom-button .col-md-6
   {
    display: flex;
    align-items: center;
    justify-content: center;
  }



  .intro strong {
    display: block;
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 1em;
    font-weight: 700;
    letter-spacing: 0.8px;
  }

  .intro-box {
    display: block;
  }

  .intro .field-required::after {
    content: " ";
    color: "#fff";
  }

  .middle {
    width: 100%;
    text-align: center;
    font-weight: 700;
    letter-spacing: 1.1px;
  }

  .middle input[type="radio"] {
    display: none;
  }

  .middle input[type="radio"]:checked + .intro-box {
    background-color: #383838;
  }

  .middle input[type="radio"]:checked + .intro-box span {
    color: white;
    transform: translateY(70px);
  }

  .middle input[type="radio"]:checked + .intro-box span:before {
    transform: translateY(0px);
    opacity: 1;
  }

  .middle .intro-box {
    width: 200px;
    height: 200px;
    background-color: rgba(139, 139, 139, 0.1);
    border-radius: 25px;
    transition: all 250ms ease;
    will-change: transition;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    position: relative;
    font-family: "Inter", sans-serif;
  }

  .middle .intro-box:active {
    transform: translateY(10px);
  }
  .middle .intro-box:hover {
    background: #ddc69d;
  }

  .middle .intro-box span {
    position: absolute;
    transform: translate(0, 60px);
    left: 0;
    right: 0;

    transition: all 300ms ease;
    font-size: 1.5em;
    user-select: none;
    color: #DD6921;
  }

  .middle .intro-box span:before {
    font-size: 1.2em;
    display: block;
    transform: translateY(-80px);
    opacity: 0;
    bottom: 30px;
    transition: all 300ms ease-in-out;
    font-weight: normal;
    color: white;
  }

  .middle .individual span:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z' fill='%23ddc69d'/%3E%3C/svg%3E");
  }

  .middle .entity span:before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h2V9h3a1 1 0 0 1 1 1v9zM7 11v2h4v-2H7zm0-4v2h4V7H7z' fill='%23ddc69d'/%3E%3C/svg%3E");
  }

  .custom-type-of-entity .middle .intro-box {
    width: 230px;
    height: 60px;
    margin-top: 10px;
    border-radius: 5px;
  }

  .custom-type-of-entity .middle .intro-box span {
    position: relative;
    display: inline-block;
    transform: translateY(18px);
    transition: all 300ms ease;
    font-size: 0.8rem;
    font-weight: bold;
    user-select: none;
    color: #143250;
  }

  .custom-type-of-entity .middle .intro-box span:before {
    display: none;
  }

  .custom-type-of-entity .middle input[type="radio"]:checked + .intro-box span {
    color: white;
    transform: translateY(18px);
  }

  .custom-button .fieldset-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .custom-button td {
    transform: translateY(-50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .custom-button .continue {
    border-radius: 50px;
    width: 265px;
    padding: 15px;
    margin-left: -13px;
    font-weight: 700;
    border: none;
    transition: 0.5s ease-in-out;
    
  }

  .custom-button .continue button {
    background: #4C8579;
    border: 3px solid #4C8579;
    box-shadow: none !important;
  }

  
  
  .custom-button .continue button:hover {
    background: #fff;
    border: 3px solid #4C8579;
    color: #4C8579;
  }

  .custom-button .continue button:active {
    transform: scale(0.95);
    background: #253341 !important;
    border: 3px solid #fff !important;
    color: #fff !important;

  }

  .custom-button .continue button[disabled] {
    background: #4C8579;
    border: 3px solid #4C8579;
    color: #fff;
  }

  .custom-button .invalid-feedback {
    display: none !important;
  }

  /* Animation  */

  .tab-animation {
    animation-name: tab-animation;
    animation-duration: 0.8s;
  }
  @keyframes tab-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .button-animation {
    animation-name: button-animation;
    animation-duration: 1.8s;
  }
  @keyframes button-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .card-animation {
    animation-name: card-animation;
    animation-duration: 0.8s;
  }

  @keyframes card-animation {
    from {
      transform: translate(-1%);
      opacity: 0;
    }
    to {
      transform: translate(0%);
      opacity: 1;
    }
  }

  .next {
    animation-name: left-to-right-animation;
    animation-duration: 0.7s;
  }
  @keyframes left-to-right-animation {
    from {
      transform: translate(-4%);
      opacity: 0;
    }
    to {
      transform: translate(0%);
      opacity: 1;
    }
  }

  .back {
    animation-name: right-to-left-animation;
    animation-duration: 0.7s;
  }
  @keyframes right-to-left-animation {
    from {
      transform: translate(4%);
      opacity: 0;
    }
    to {
      transform: translate(0%);
      opacity: 1;
    }
  }

  .nav-item-hide {
    animation-name: hide-animation;
    animation-duration: 0.9s;
  }
  @keyframes hide-animation {
    from {
      transform: translate(0%);
      opacity: 1;
    }
    to {
      transform: translateY(-2%);
      opacity: 0;
    }
  }
  .nav-item-show {
    animation-name: show-animation;
    animation-duration: 0.8s;
  }
  @keyframes show-animation {
    from {
      transform: translateY(2%);
      opacity: 0;
    }
    to {
      transform: translate(0%);
      opacity: 1;
    }
  }

  /* Signee Details   */

  .overlay:before {
    content: "This section will become available after all other sections are complete.";
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='240' height='240'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3zm2 6h-4v1h4v-1zm-2-4a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993L12 9z' fill='rgba(236,240,241,1)'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    font-size: 50px;
    color: #ffffff;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    height: max-content;
    z-index: 1000;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: color-burn;
    padding: 5rem;
    border-radius: 100px;
    text-shadow: 8px -8px 20px black;
  }

  .overlay:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 101%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  /* Buttons  */

  .preview .get-started{
    border-radius: 25px;
  }

  .navigation-back svg,
  .navigation-next svg {
    width: 90px;
    height: 90px;
    transform: translate(0);
  }

  .navigation-next svg {
    width: 220px;
  }

  .navigation-back path,
  .navigation-next path {
    transition: 0.4s;
  }

  .navigation-back svg:hover path,
  .navigation-next svg:hover path {
    fill: black;
  }

  .preview .navigation-back,
  .preview .navigation-next {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .preview .navigation-back .navigation-back,
  .preview .navigation-next .navigation-next {
    background: none;
    border: none;
  }

  .preview .navigation-next svg rect {
    opacity: 0.5;
    transition: 0.4s;
  }

  .preview .navigation-next svg:hover rect {
    opacity: 0.8;
  }

  .preview svg {
    transition: 0.4s;
  }

  .preview button:hover svg {
    transform: scale(0.95);
  }

  .preview button:active svg {
    transform: scale(1.05);
  }

  .preview .navigation-back .btn-success,
  .preview .navigation-next .btn-success,
  .preview .navigation-back .btn-danger,
  .preview .navigation-next .btn-danger {
    background: none !important;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  .preview .next-green rect {
    transition: 0.5s;
    fill: #00a86b;
    opacity: 1 !important;
    stroke-width: 0;
  }

  .preview .next-green svg:hover rect {
    fill: #fff;
    stroke-width: 2;
    stroke: #00a86b;
  }

  .preview .next-green text {
    fill: #fff;
  }

  .preview .next-green svg:hover text {
    fill: #00a86b;
  }

  .preview .signee-details .next-green rect {
    stroke-dasharray: 630;
    stroke-dashoffset: 500;
    transition: 1.5s;
  }

  .preview .signee-details .next-green svg:hover rect {
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #00a86b;
    fill: #fff;
  }

  .preview .signee-details .next-green svg:hover text {
    fill: #00a86b;
  }

  .preview .argentex .form-control{
    position: relative;
    display: block;
    width: 100%;
    padding: 15px 10px;
    height: 50px;
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-radius: 0px !important;
    border-left: 9px solid;
    border-color: #143250;
    background: #fff;
    color: #253341;
    font-size: 15px;
    transition: border-color .3s;
    -webkit-appearance: none;
  }

  .preview .argentex .form-control.is-invalid {
    border-color: #e00303;
  }

  .preview .argentex .formio-component-textfield label,
  .preview .argentex .formio-component-number label,
  .preview .argentex .formio-component-email label,
  .preview .argentex .formio-component-datetime label,
  .preview .argentex .formio-component-select:not(.custom-code) label
  {
    transition: 250ms;
    z-index: 1000;
    font-weight: 700;
    position: relative;
    transform: translate(20px, 43px);
    opacity: 0.7 !important;
    pointer-events: none !important;
  }

  .preview .argentex .custom-mobile label {
    display : none;
  }

  .preview .argentex .form-group.formio-component-multiple label{
    transform: none;
  }


  .preview .argentex .form-group.formio-component-multiple  tr[ref="row"]:first-of-type .btn.btn-secondary{
    display: none !important;
  }

  .preview .argentex .formio-component-radio:not(.type-custom) label,
  .preview .argentex .formio-component-radio.type-custom label.field-required
  ,
  .preview .argentex .formio-component-checkbox label{
    opacity: 0.7 !important;
    font-weight: 700;
  }


  .preview .argentex .has-error label{
    color: #e00303;
  }

  .preview .argentex .formio-error-wrapper{
    color: #e00303;
    background-color: transparent;
    border-color: transparent;
    padding: 0;
  }

  .preview .argentex .formio-error-wrapper .form-control {
    border-left: 9px solid #e00303 !important;
  }

  

  .preview .argentex .form-control:focus{
    box-shadow: none !important;
  }

  .preview .argentex .input-group-append{
    display: none;
  }

  .preview .wrapper, 
  .preview .card {
    background: #F4F5F6;
  }
  .preview .is-active {
   z-index: 10000;
  }
  .preview input[type=checkbox],
  .preview input[type=radio] {
    accent-color: #143250 !important;
}

.formio-errors .error {
  color:  #e00303;
  font-weight: 800;
  letter-spacing: 0.8px;
}

.preview .argentex .formio-button-add-another {
  background: #383838 !important;
  border: #383838 !important;
  box-shadow: none !important;
  transition: 300ms;
}

.preview .argentex .formio-button-add-another:active,
.preview .argentex .formio-button-add-another:focus {
  background: #000000 !important;
  border: #000000 !important;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4) !important;
}

.preview .argentex .custom-mobile .fieldset-body{
  display: flex;
} 
.preview .argentex .custom-code label{
  display: none;
} 

.preview .argentex .custom-mobile .fieldset-body .formio-component-number .form-control {
  border-left: none;
}

.preview .argentex .custom-mobile .fieldset-body .formio-component-number .form-control.is-invalid {
  border-left: 9px solid #e00303;
}

.preview .argentex .custom-mobile .fieldset-body .formio-component-select {
  width: 30%;
}

.preview .argentex .custom-mobile .fieldset-body .formio-component-select .field-required:after {
  content: "";
  display: none;
}
.preview .argentex .custom-mobile .fieldset-body .formio-component-number {
  width: 70%;
}

/* Spinner for pdf  */

.card {
  /* Your card styles here */
  position: relative;
}



.spinner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    z-index: 10000;

}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner i {
  font-size: 60px;
  color: rgba(31, 148, 165, 1);
}

.loading-text{
  color: #dedede;
  font-size: 1.8rem;
  font-weight: 600;
}

</style>

`




/////
// Remix Icons
/////

const green = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="rgba(31,148,165,1)"/></svg>`;

const yellow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z" fill="rgba(241,196,14,1)"/></svg>`;

const grey = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" fill="rgba(98,98,98,1)"/></svg>`;

const redBox = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="24" style="margin-bottom:10px"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(249,113,113,1)"/></svg>`;

const greenBox = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="24" style="margin-bottom:10px"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(25,188,155,1)"/></svg>`;


const lock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-7 7.732V18h2v-2.268a2 2 0 1 0-2 0zM16 8V7a4 4 0 1 0-8 0v1h8z" fill="rgba(52,72,94,1)"/></svg>`

///// /////
// Tab Logic
///// /////

if (builder.length === 0) {
  parent.classList.add("parent");

  document.querySelector(".content").style.display = "block";
  

  
//Button Style 

backBtn.forEach(item=>{

  item.classList.remove('btn', 'btn-secondary', 'btn-md', 'btn-block');

  item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z" fill="rgba(110,121,116,1)"></path></svg>`
})



  
  nextBtn.forEach(item=>{
    item.classList.remove('btn', 'btn-success', 'btn-md', 'btn-block', 'btn-danger', 'submit-fail');
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
    <rect x="10" y="10" width="180" height="60" rx="30" ry="30" fill="#d5d5d5" stroke="black" stroke-width="2"></rect>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" font-weight="bold">Next</text>
  </svg>
  `
  if(item.classList.contains("review")){
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
    <rect x="10" y="10" width="180" height="60" rx="10" ry="10" fill="#d5d5d5" stroke="black" stroke-width="2"></rect>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" font-weight="bold">Review and Sign</text>
  </svg>
  `
  }
  }) 
  


  const textFields = document.querySelectorAll('.formio-component-textfield:not(.formio-component-multiple) input, .formio-component-email input, .formio-component-datetime .flatpickr-input, .formio-component-number input');


  textFields.forEach(function(input) {
    const label = input.closest('.form-group').querySelector('label[for="' + input.id + '"]');

    if(label){

      input.addEventListener('input', function() {
        if (input.value !== '') {
          label.style.transform = 'translate(0)';
        } else {
          label.style.transform = 'translate(20px, 43px)';
        }
      });
  
      if (input.value !== '') {
        label.style.transform = 'translate(0)';
      } else {
        label.style.transform = 'translate(20px, 43px)';
      }

    }
  
    
  });

  
  const multiFields = document.querySelectorAll('.formio-component-multiple input');

  multiFields.forEach(function(input) {
    const label = input.closest('.form-group').querySelector('label[for="' + input.id + '"]');

    if(label){

  
   
    if(multiFields[0].value !== '') {
      label.style.transform = 'translate(0)';
      input.parentNode.parentNode.parentNode.querySelector('.formio-button-add-another').style.display = 'block'
    }
    else{
      label.style.transform = 'translate(30px, 57px)';
      input.parentNode.parentNode.parentNode.querySelector('.formio-button-add-another').style.display = 'none'
    }
    

    input.addEventListener('input', function() {
      if (multiFields[0].value !== '') {
        label.style.transform = 'translate(0)';
        input.parentNode.parentNode.parentNode.querySelectorAll('.btn-secondary').forEach(btn=>{
          btn.style.display = 'block'
        })
      
      } else {
        label.style.transform = 'translate(30px, 57px)';
        input.parentNode.parentNode.parentNode.querySelectorAll('.btn-secondary').forEach(btn=>{
          btn.style.display = 'none'
        })
      }
    });
  
  }
   
  });




  const dropdownFields = document.querySelectorAll('.formio-component-select select');

  dropdownFields.forEach(function(select) {


    const label = select.parentNode.parentNode.parentNode.querySelector('label[for="' + select.id + '"]');

    if(label){
    
    if (select.value !== '') {
      if(label){
        label.style.transform = 'translate(0)';
      }
    }else {
      if(label){

      label.style.transform = 'translate(20px, 43px)';
      }
    }
    

    select.addEventListener('change', ()=>{
      if (select.value !== '') {
        label.style.transform = 'translate(0)';
      } else {
        label.style.transform = 'translate(20px, 43px)';
      }
    })

  }

  });

 const countryCodes = document.querySelectorAll('.custom-code')

 countryCodes.forEach(comp=>{
  comp.querySelector('.formio-select-autocomplete-input').disabled = 'true'
 })

  
  if (!parent.children[1]) {
    const logo = document.createElement("section");
    parent.appendChild(logo);
    parent.querySelector(".formio-form").style.display = "none";

    tabs.style.display = "flex";
    tabs.style.justifyContent = "center";
    tabs.style.alignItems = "center";

    setTimeout(() => {
    
      formio.style.width = '35%';
      parent.querySelector("section").innerHTML = `
        <img class="logo" src="https://i.postimg.cc/jjsSDv1H/new-gif-animation-logo.gif" alt="">
        `;
    }, 0);

    setTimeout(() => {
      parent.querySelector(".formio-form").style.display = "block";
      parent.querySelector("section").innerHTML = "";
      tabs.style.display = "flex";
      formio.style.width = '65%';
    }, 2000);
  }




  if (!head.innerHTML.includes(customStyles)) {
    head.innerHTML += customStyles;
  }



  if (cardHeader) {
    if (!cardHeader.classList.contains("form-builder-group-header")) {
    }
  }

  cardHeader.style.display = 'none'

  if (card) {
    mediaQueriesCard();
    window.addEventListener("resize", mediaQueriesCard);
  }

  if (navBar) {
    navBar.style.flexDirection = "column";

  }

  if (cardBody) {
    let fields;

    cardBody.forEach((tab) => {
      if (tab.style.display == "block") {
        fields = tab.querySelectorAll(".required");
      }

      if (fields) {
        fields.forEach((item) => {
          if (item.classList.contains("formio-modified")) {
            item.classList.remove("formio-error-wrapper");
          }
        });
      }
    });

    cardBody.forEach((element, i) => {
      element.style.width = "100%";

    
    });
  }

  if (cardHeaderUl) {
    cardHeader.style.padding = "0";
    cardHeader.style.borderBottom = "0";
    cardHeader.style.borderBottomLeftRadius = "7px";
    cardHeader.style.background = "#fafafa";
    cardHeader.style.paddingBottom = "2em";

    if (!cardHeaderUl.classList.contains("loaded")) {
      cardHeaderUl.style.margin = "0";
      cardHeaderUl.classList.add("loaded");
      cardHeaderUl.insertAdjacentHTML(
        "beforebegin",
        '<p class="nav-header">All Pages</p>'
      );
      const navHeader = document.querySelector(".nav-header");

      mediaQueriesHeader(navHeader);

      window.addEventListener("resize", () => {
        mediaQueriesHeader(navHeader);
      });
    }
  }
  navItems.forEach((item) => {
    item.style.width = "100%";
    // item.style.borderBottom = "2px solid #F5F5F5"
  });

  navLinks.forEach((item) => {
    item.style.fontSize = "1.2rem";
    item.style.fontWeight = "700";
    item.style.border = "0";
    item.style.width = "100%";
    item.style.borderRadius = "0";
    item.style.borderRadius = "0";
    item.addEventListener("click", () => {
      animate();
    });
  });
}

///// /////
// Functions
///// /////

/////
// Card Animation(Opacity+Translate)
/////

function animate() {
  card.classList.add("card-animation");
  disableButtons();
  setTimeout(removeAnimation, 800);

  function removeAnimation() {
    card.classList.remove("card-animation");
    enableButtons();
  }
}

/////
// Sidebar buttons enabling/disabling for Card animation to work properly
/////

function disableButtons() {
  navLinks.forEach((item) => {
    item.style.pointerEvents = "none";
  });
}

function enableButtons() {
  navLinks.forEach((item) => {
    item.style.pointerEvents = "auto";
  });
}

///// /////
// Media Queries
///// /////

/////
// Card Display
/////

function mediaQueriesCard() {
  /////
  // Mobile Devices
  /////

  if (
    window.matchMedia("(min-width: 200px)").matches &&
    window.matchMedia("(max-width: 600px)").matches
  ) {
    card.style.flexDirection = "column";
  }

  /////
  // Large Screen
  /////
  else {
    card.style.flexDirection = "row";
  }
}

/////
// Navbar Styling
/////

function mediaQueriesHeader(navHeader) {
  /////
  // Mobile Devices
  /////

  if (
    window.matchMedia("(min-width: 200px)").matches &&
    window.matchMedia("(max-width: 600px)").matches
  ) {
    navHeader.style.borderTopRightRadius = "5px";
    navHeader.style.textAlign = "center";
    navHeader.style.paddingLeft = "10px";
    cardHeader.style.textAlign = "center";
    snackbar.style.left = "37%";
    cardHeader.style.borderBottom = "5px solid #f5f5f5";
    cardHeader.style.borderRight = "0";
    formio.style.width = '100%';
  

  }

  /////
  // Large Screen
  /////
  else {
    cardHeader.style.borderRight = "5px solid #f5f5f5";
    cardHeader.style.borderBottom = "0";
    cardHeader.style.width = "570px";
    card.style.minHeight = "670px";
    navHeader.style.borderTopRightRadius = "0";
    navHeader.style.textAlign = "start";
    cardHeader.style.textAlign = "start";
    navHeader.style.paddingLeft = "18px";
    snackbar.style.left = "53%";
    formio.style.width = '65%';
  
  }
}

///// /////
// Validations
///// /////

setTimeout(checkError, 1);


function checkError() {

  ////
        //EditGrid Validation Extra
        ////

        // Add the class "custom-error" to the formio component


        const editGrid = document.querySelectorAll(".formio-component-editgrid")

        editGrid.forEach(element=>{
          if(element.querySelectorAll("li").length > 1){
            element.classList.remove("custom-error");
            }
         if(element.classList.contains("formio-hidden")){
           element.classList.remove("custom-error");
          }
         if(element.classList.contains("formio-modified")){
          element.classList.remove("custom-error");
          }
        })

  cardBody.forEach((tab, i) => {
    let fields;

    let check;

    let boxes = [];

    let boxesEl;

    let fieldErrors;

    /////
    // Collecting all required fields
    /////

    fields = tab.querySelectorAll(".required");
    boxesEl = tab.querySelector(".validation");

    fields.forEach((element) => {

      /////
      // Error Checking
      /////

      if (!element.classList.contains("formio-hidden")) {
        boxes.push(element);

        /////
        // Text Area Components
        /////

        if (element.classList.contains("formio-component-textarea")) {
          

          if (!element.classList.contains("formio-modified")) {
            const text = element.querySelector("textarea");

            if (!text.textContent) {
              element.classList.add("custom-error");
            }
          } else if (element.classList.contains("has-error")) {
            element.classList.add("custom-error");
          } else {
            element.classList.remove("custom-error");
          }
        }

        /////
        // Survey Components
        /////

        ///////
        // Important: Rename the component from "survey" to something else and then add the following code to the "Advanced Conditions" of all survey components.


        
      //   if(Object.keys(data.tabContainerComp.APIKEY).length < 1){
      //     document.querySelector(`.formio-component-APIKEY`).classList.add("custom-error")
      //   }
      //   else{
      //     document.querySelector(`.formio-component-APIKEY`).classList.add("validated")
      //  }

        ///////

        if (element.classList.contains("formio-component-survey")) {
          
          if(element.querySelector("input").classList.length !== 0){
            if(!element.querySelector("input").classList.contains("is-invalid")){
              element.classList.remove("custom-error");
            }
          }
          }
          
            /////
        /// EditGrid Validation 
        /////

        if(element.classList.contains("formio-component-editGrid")) {
          
          if(element.classList.contains("formio-modified")){
            element.classList.remove("custom-error");
          }
          if(element.querySelectorAll("li").length > 1){
            element.classList.remove("custom-error");
            }
        }
        
          


        /////
        // Common Components
        /////

        check = element.querySelectorAll(
          "input, select, .radio, .checkbox, .form-group"
        );

        check.forEach((item) => {
          if (item.classList.contains("form-control")) {
            if (!item.value) {
              console.log("Invalid input");
              element.classList.add("custom-error");
            } else if (element.classList.contains("has-error")) {
              element.classList.add("custom-error");
            } else {
              element.classList.remove("custom-error");
            }
          }

          if (
            item.classList.contains("radio") ||
            item.classList.contains("checkbox")
          ) {
            let options = item.querySelectorAll("input[checked]");

            if (element.classList.contains("has-error")) {
              console.log("Invalid radio/checkbox");
              element.classList.add("custom-error");
            } else if (options.length === 0) {
              element.classList.add("custom-error");
            } else {
              element.classList.remove("custom-error");
            }
          }
        });
      }
    });

    /////
    // Red/Green Boxes
    /////

    fieldErrors = tab.querySelectorAll(".custom-error");

    if (builder.length == 0) {
      if (boxesEl) {
        let completed = boxes.length - fieldErrors.length;
        let notCompleted = fieldErrors.length;

        let completedArr = [];
        let notCompletedArr = [];

        for (let i = 0; i < completed; i++) {
          completedArr.push(greenBox);
        }
        for (let i = 0; i < notCompleted; i++) {
          notCompletedArr.push(redBox);
        }


        // ${completedArr.join("")} 
        // ${notCompletedArr.join("")} 

        
        /////
        // Sidebar Ticks
        /////

        if(errorFields.length !== 0){

       

          if (navLinks[navLinks.length - 1].innerHTML.includes("svg")) {
            const nav = navLinks[navLinks.length - 1].innerHTML.slice(
              0,
              navLinks[navLinks.length - 1].innerHTML.indexOf("<")
            );
            navLinks[navLinks.length - 1].innerHTML = nav + `${lock}`;
          } else {
            navLinks[navLinks.length - 1].innerHTML += ` ${lock}`;
          }
        }

        if (boxes.length - fieldErrors.length == 0) {

          if(data.tabContainerComp.selectALanguage == 'dutch'){
            boxesEl.innerHTML = `
            <div  class="boxes">
            ${yellow} Er zijn nog geen velden ingevuld 
            </div>`;
          }
          else{
            boxesEl.innerHTML = `
            <div  class="boxes">
            ${yellow} No fields(Mandatory) have yet been completed 
            </div>`;
          }

          
          



          if (navLinks[i].innerHTML.includes("svg")) {
            const nav = navLinks[i].innerHTML.slice(
              0,
              navLinks[i].innerHTML.indexOf("<")
            );
            navLinks[i].innerHTML = nav + ` ${yellow}`;
          } else {
            navLinks[i].innerHTML += ` ${yellow}`;
          }
        } else if (boxes.length - fieldErrors.length < boxes.length) {

          if(data.tabContainerComp.selectALanguage == 'dutch'){

          boxesEl.innerHTML = `
          <div  class="boxes">  
              
          ${grey} Er ontbreken nog steeds ${fieldErrors.length} velden informatie 
          </div>`;

          }
          else{

            boxesEl.innerHTML = `
          <div  class="boxes">  
          ${grey} There are still ${fieldErrors.length} fields(Mandatory) missing information 
          </div>`;

          }

          if(fieldErrors.length == 1){

            if(data.tabContainerComp.selectALanguage == 'dutch'){
              boxesEl.innerHTML = `
              <div  class="boxes">
                  
              ${grey} Er ontbreekt nog 1 veld informatie 
              </div>`;
            }
            else{
              
            boxesEl.innerHTML = `
            <div  class="boxes">
                
            ${grey} There is still 1 field(Mandatory) missing information 
            </div>`;
            }
           
          }

          if (navLinks[i].innerHTML.includes("svg")) {
            const nav = navLinks[i].innerHTML.slice(
              0,
              navLinks[i].innerHTML.indexOf("<")
            );
            navLinks[i].innerHTML = nav + ` ${grey}`;
          } else {
            navLinks[i].innerHTML += ` ${grey}`;
          }
        } else if (boxes.length - fieldErrors.length == boxes.length) {

          if(data.tabContainerComp.selectALanguage == 'dutch'){

            boxesEl.innerHTML = `
            <div  class="boxes">    
            ${green} Alle velden ingevuld 
            </div>`; 
              
          }
          else{
            boxesEl.innerHTML = `
            <div  class="boxes">    
            ${green} All fields(Mandatory) completed 
            </div>`;   
          }
   
          

          if (navLinks[i].innerHTML.includes("svg")) {
            const nav = navLinks[i].innerHTML.slice(
              0,
              navLinks[i].innerHTML.indexOf("<")
            );
            navLinks[i].innerHTML = nav + ` ${green}`;
          } else {
            navLinks[i].innerHTML += ` ${green}`;
          }
    
        }

        if(!fieldErrors.length){
          tab.querySelector(".navigation-next").classList.add("next-green")
        }else if(fieldErrors.length){
          tab.querySelector(".navigation-next").classList.remove("next-green")
        }



      }
    }
  });
}





setTimeout(()=>{

  const errorFields = document.querySelectorAll(".tab-pane:not(:last-child) .custom-error")
  
  
  
    if(errorFields.length !== 0){
      document.querySelector(".signee-details").classList.add('overlay')
      document.querySelector(".signee-details").style.padding = "1.25rem"
      document.querySelector(".tab-pane:last-child").style.padding = "0"


  
      if (navLinks[navLinks.length - 1].innerHTML.includes("svg")) {
        const nav = navLinks[navLinks.length - 1].innerHTML.slice(
          0,
          navLinks[navLinks.length - 1].innerHTML.indexOf("<")
        );
        navLinks[navLinks.length - 1].innerHTML = nav + `${lock}`;
      } else {
        navLinks[navLinks.length - 1].innerHTML += ` ${lock}`;
      }
      
    }
    else{
      document.querySelector(".signee-details").classList.remove('overlay')
      document.querySelector(".tab-pane:last-child").style.padding = "1.25rem"
      document.querySelector(".signee-details").style.padding = "0"
    }
  
  },5)


// Modal Close 




 








// Spinner for pdf 




// Function to show the spinner overlay

 // Check if the spinner overlay element already exists
const spinnerOverlay = tabs.querySelector('.spinner-overlay');
if (!spinnerOverlay) {
// Create the spinner overlay element
const spinnerOverlayElement = document.createElement('div');
spinnerOverlayElement.id = 'spinner-overlay';
spinnerOverlayElement.classList.add('spinner-overlay');

    // Create the spinner element
const spinner = document.createElement('div');
spinner.classList.add('spinner');
const loadingText = document.createElement('p');
loadingText.classList.add('loading-text');
loadingText.textContent = 'Downloading PDF. Please wait...'

// Create the spinner icon
const spinnerIcon = document.createElement('i');
spinnerIcon.classList.add('fas', 'fa-spinner', 'fa-spin');

// Append the spinner icon to the spinner element
spinner.appendChild(spinnerIcon);

// Append the spinner element to the spinner overlay element
spinnerOverlayElement.appendChild(spinner);
spinnerOverlayElement.appendChild(loadingText);

// Append the spinner overlay element to the card
tabs.appendChild(spinnerOverlayElement);
  }










// External Libraries




// Check if html2pdf.bundle.js script exists
if (!document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"]')) {
  const script1 = document.createElement('script');
  script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
  const existingScript = document.getElementsByTagName('script')[0];
  existingScript.parentNode.insertBefore(script1, existingScript);
}


// Check if the Font Awesome CSS file is already included
var fontAwesomeCSS = document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"]');

// If the Font Awesome CSS file is not found, add it to the document head
if (!fontAwesomeCSS) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  document.head.appendChild(link);
}



// API CALL 

const originalLink = window.location.href

const apiLink = originalLink.replace('meshid.app/verifications', 'meshid.app/api/verifications')

  fetch(apiLink)
  .then(response => response.json())
  .then(jsonData =>
  {
    //Entity

    data.name = jsonData.record.personData.MID_LP_Name
    data.type = jsonData.record.personData.MID_LP_Type
    data.countryLp = jsonData.record.personData.MID_LP_Country_Of_Registration
    data.dateLp = jsonData.record.personData.MID_LP_Date_Of_Registration
    data.regNumber = jsonData.record.personData.MID_LP_Number
    data.taxLp = jsonData.record.personData.MID_LP_Tax_Number
    data.regulated = jsonData.record.personData.MID_LP_Regulated
    data.regulator = jsonData.record.personData.MID_LP_Regulator
    data.tradeName = jsonData.record.personData.MID_LP_Trade_Name
    data.addressLp = jsonData.record.personData.MID_LP_Address
    data.cityLp = jsonData.record.personData.MID_LP_Address_City
    data.addressCountryLp = jsonData.record.personData.MID_LP_Address_Country
    data.postCodeLp = jsonData.record.personData.MID_LP_Postalcode


    //Natural Person

    data.first = jsonData.record.personData.MID_NP_First
    data.middle = jsonData.record.personData.MID_NP_Middle
    data.last = jsonData.record.personData.MID_NP_Last
    data.dob = jsonData.record.personData.MID_NP_DOB
    data.countryBirth = jsonData.record.personData.MID_NP_Country_Of_Birth
    data.nationality = jsonData.record.personData.MID_NP_Nationality
    data.countryResidence = jsonData.record.personData.MID_NP_Country_Of_Residence
    data.dualNationality = jsonData.record.personData.MID_NP_Dual_Nationality
    data.email = jsonData.record.personData.MID_NP_Email
    data.formerFirst = jsonData.record.personData.MID_NP_Former_First
    data.formerLast = jsonData.record.personData.MID_NP_Former_Last
    data.gender = jsonData.record.personData.MID_NP_Gender
    data.occupation = jsonData.record.personData.MID_NP_Occupation
    data.taxNp = jsonData.record.personData.MID_NP_Tax_ID_Number
    data.address = jsonData.record.personData.MID_NP_Address
    data.city = jsonData.record.personData.MID_NP_Address_City
    data.addressCountry = jsonData.record.personData.MID_NP_Address_Country
    data.postCode = jsonData.record.personData.MID_NP_Postalcode
  } )
  .catch(error => console.error(error));

