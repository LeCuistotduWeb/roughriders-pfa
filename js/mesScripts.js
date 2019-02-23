// A $( document ).ready() block.
$(document).ready(function () {
    $('#panier-btn').On.click(function(){
        $( "#panier-article" ).slideToggle( "slow" );
    })
});