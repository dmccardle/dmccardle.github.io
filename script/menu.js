/*
*   Used for controlling the mobile-friendly dropdown menu
*/
$(document).ready(function() {
    $('#toggle').on('click', function() {
        $('#menu-bar ul').slideToggle(200);
    });
});