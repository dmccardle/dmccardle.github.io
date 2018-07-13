var menuBar = $('#menu-bar');
var width = $(window).width();
var offset = width > 502 ? 350 : 425;

$(window).scroll(function() {
    if( $(this).scrollTop() > offset) {
        menuBar.addClass('menu-bar-scrolled');
    } else {
        menuBar.removeClass('menu-bar-scrolled');
    }
});