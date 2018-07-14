$(document).ready(function() {
    var menuBar = $('#menu-bar');

    $(window).scroll(function() {
        if( $(this).scrollTop() > getOffset()) {
            menuBar.addClass('menu-bar-scrolled');
        } else {
            menuBar.removeClass('menu-bar-scrolled');
        }
    });
});

function getOffset() {
    var width = $(window).width();
    var offset = width > 502 ? 350 : 425;
    return offset;
}