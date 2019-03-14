;( function( $ ) {
    
    $.ready( function(){
        console.log( $.fn.jquery );
    } );
    
    var mBtn = document.querySelector( "[data-modalBtn][for='modalPopup1']" );
    function changeBtn() {
     //console.log( modalPopup1.checked );
     if ( modalPopup1.checked == true ) {
      mBtn.classList.add( "active" );
     } else {
      mBtn.classList.remove( "active" );
     }
    }
   
    if ("onpropertychange" in modalPopup1) {
     // старый IE
     modalPopup1.onpropertychange = function() {
      // проверим имя изменённого свойства
      if (event.propertyName == "checked") {
       changeBtn();
      }
     };
    } else {
     // остальные браузеры
     modalPopup1.onchange = function() {
      changeBtn();
     };
    }
    
   }( window.$ ) );