

const textFields = document.querySelectorAll('.formio-component-textfield:not(.formio-component-multiple) input, .formio-component-number:not(.formio-component-multiple) input, .formio-component-email input, .formio-component-datetime .flatpickr-input, .formio-component-textarea textarea');

  textFields.forEach(function(input) {
    const label = input.closest('.form-group').querySelector('label[for="' + input.id + '"]');
  
    if(label){
      input.addEventListener('focus', function() {
          label.style.transform = 'translate(0)';
      });
      input.addEventListener('blur', function() {
        if (input.value !== '') {
          label.style.transform = 'translate(0)';
        }else if(input.previousElementSibling){
          label.style.transform = 'translate(53px, 43px)';
        }
        else {
          label.style.transform = 'translate(20px, 43px)';
        }
      });
  
      if (input.value !== '') {
        label.style.transform = 'translate(0)';
      }else if(input.previousElementSibling){
        label.style.transform = 'translate(53px, 43px)';
      }
      else {
        label.style.transform = 'translate(20px, 43px)';
      }
    }

    
  });

const dropdownFields = document.querySelectorAll('.formio-component-select select');

dropdownFields.forEach(function(select) {


  const label = select.parentNode.parentNode.parentNode.querySelector('label[for="' + select.id + '"]');

  if(label){

    if (select.value !== '') {
        label.style.transform = 'translate(0)';
    }else {
      label.style.transform = 'translate(20px, 43px)';
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

const multiFields = document.querySelectorAll('.formio-component-multiple:not(.formio-component-select) input');

multiFields.forEach(function(input) {
  const label = input.closest('.form-group').querySelector('label[for="' + input.id + '"]');


if(label){
  if(multiFields[0].value !== '') {
    label.style.transform = 'translate(0)';
    input.parentNode.parentNode.parentNode.querySelector('.formio-button-add-another').parentElement.style.display = 'block'
  }
  else{
    label.style.transform = 'translate(20px, 57px)';
    input.parentNode.parentNode.parentNode.querySelector('.formio-button-add-another').parentElement.style.display = 'none'
  }


  input.addEventListener('focus', function() {
    label.style.transform = 'translate(0)';
  });
  input.addEventListener('blur', function() {
    if (multiFields[0].value !== '') {
      label.style.transform = 'translate(0)';    
    } else {
      label.style.transform = 'translate(20px, 57px)';
      input.parentNode.parentNode.parentNode.querySelectorAll('.btn-secondary').forEach(btn=>{
        btn.style.visibility = 'hidden'
      })
    }
  });

  


}
 
 


 
});


const backBtn = document.querySelectorAll('.navigation-back > .navigation-back')
const nextBtn = document.querySelectorAll('.navigation-next > .navigation-next')

   
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