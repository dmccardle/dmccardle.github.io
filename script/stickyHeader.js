
var menuBar = $('#menu-bar');

$(window).scroll(function() {
    if( $(this).scrollTop() > 350) {
        menuBar.addClass('menu-bar-scrolled');
    } else {
        menuBar.removeClass('menu-bar-scrolled');
    }
});