/*
*   Used for controlling the mobile-friendly dropdown menu
*/
$(document).ready(function() {
    $('#toggle').on('click', function() {
        $('#menu-bar ul').slideToggle(200);
    });
    
    /* Allows for the menu dropdown to hide by clicking outside of the menu */
    $('main').on('click', function() {
    	if($( "#toggle" ).is( ":visible" )) {
    		$('#menu-bar ul').slideUp(200);
    	}
    });
    
    /* Fixes issues when resizing screen */
    $(window).resize(function() {
    	if($( "#toggle" ).is( ":hidden" )) {
    		$('#menu-bar ul').show();
    	} else {
    		$('#menu-bar ul').hide();
    	}
    });
    
    $('#menu-bar ul a li').on('click', function(event) {
        $('#menu-bar ul a li').removeClass('active');
        $(event.currentTarget).addClass('active');
    });
});