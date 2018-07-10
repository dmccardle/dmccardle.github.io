$(document).ready(function() {
    var navigationLinks = $('.scroll');
    
    navigationLinks.on('click', function(event) {
        event.preventDefault();
        
        var distance = Math.abs($(this).offset().top -  $(this.hash).offset().top);
        var timeToScroll = 400;
        
        if(distance > 1000) {
            timeToScroll = 700;
        }
        
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, timeToScroll);
        
    });
});