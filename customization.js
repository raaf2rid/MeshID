const textFields = document.querySelectorAll('.formio-component-textfield:not(.formio-component-multiple) input, .formio-component-email input, .formio-component-datetime .flatpickr-input, .formio-component-number input');
const multiFields = document.querySelectorAll('.formio-component-multiple input');
const dropdownFields = document.querySelectorAll('.formio-component-select select');
const countryCodes = document.querySelectorAll('.custom-code')


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

      document.addEventListener("DOMContentLoaded", function() {
        if (input.value !== '') {
          label.style.transform = 'translate(0)';
        } else {
          label.style.transform = 'translate(20px, 43px)';
        }
      });
      
  
    }
  
    
  });

  

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


countryCodes.forEach(comp=>{
  comp.querySelector('.formio-select-autocomplete-input').disabled = 'true'
 })