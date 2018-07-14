$(document).ready(function() {
    var navigationLinks = $('.scroll');
    
    navigationLinks.on('click', function(event) {
        event.preventDefault();
        
        var distance = Math.abs($(this).offset().top -  $(this.hash).offset().top);
        var minTime = 300;
        var maxTime = 1000;
        var timeToScroll = 23 * Math.sqrt(distance);
        
        timeToScroll = timeToScroll < minTime ? minTime : timeToScroll;
        timeToScroll = timeToScroll > maxTime ? maxTime : timeToScroll;
        
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, timeToScroll);
        
    });
});