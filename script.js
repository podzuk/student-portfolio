
function add_menu() {
    if ($('#menu').css('display') == 'none') 
        { 
            $('#menu').animate({width: 'show'}, 400); 
        } 
    else 
        {     
          $('#menu').animate({width: 'hide'}, 400); 
        } 
  }