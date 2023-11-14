
//fechar o balao de info com o esc
$(document).ready(function(){

   let elem = "#info"; 
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $( elem ).hide();
    }
});
})
