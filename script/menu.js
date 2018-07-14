/*
*   Used for controlling the mobile-friendly dropdown menu
*/
$(document).ready(function() {
    $('#toggle').on('click', function() {
        $('#menu-bar ul').slideToggle(200);
    });
    
    $('#menu-bar ul a li').on('click', function(event) {
        $('#menu-bar ul a li').removeClass('active');
        $(event.currentTarget).addClass('active');
    });
});