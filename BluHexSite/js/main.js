
$(document).ready(function() {
   $('#the_form').validate({
     rules: {
      email: {
          required: true,
          email: true
          },
      zip: {
          required: true,
          zipcodeUS: true
          },
      phone: {
          required: true,
          phoneUS: true
          }
        }, //end rules

     messages: {
          email: {
          required: "Please supply an e-mail address.",
          email: "This is not a valid email address."
          },
      },
     
     errorPlacement: function(error, element) { 
         if ( element.is(":radio") || element.is(":checkbox")) {
            error.appendTo( element.parent());  
            /*
        CN - appendTo() adds HTML as the last child element of the selected element.
        Here the element.parent() is the div where the radios and checkboxes are nested,
        so the error is addes just before the </div>.
            */
          } else {
            error.insertAfter(element);
          } 
      } 
    }); 
    
    $('#activities').hide();

    $('#info').click(function() {
      if ($(this).prop('checked')) {
        $('#activities').slideDown('fast');
      } 
      else {
        $('#activities').slideUp('fast');
      }
    });
  });

