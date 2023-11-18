
//fechar o balao de info com o esc e clickando fora
$(document).ready(function(){
    const container = $("#info");
    $(document).mouseup(function(e){
    
        // checa se o click nao foi no #info
        if(!container.is(e.target) && container.has(e.target).length === 0){
            container.hide();
        }
    });

$( document ).on( 'keydown', function ( e ) {
    
    if ( e.keyCode === 27 ) { // ESC
        $(container).hide();
    }
});
})
