$(document).ready(function() {
    /* Menu links */
    var navigationLinks = $('.scroll');
    
    navigationLinks.on('click', function(event) {
        event.preventDefault();
        
        var distance = Math.abs($(this).offset().top -  $(this.hash).offset().top);
        
        var timeToScroll = getScrollTime(distance); 
        
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - getScrollOffset()
        }, timeToScroll);        
    });
    
    /* Back to Top */
    
    var backToTop = $('#back-to-top');
    $(window).scroll(function() {
        if( $(this).scrollTop() > 300) {
            backToTop.fadeIn(300);
        } else {
            backToTop.fadeOut(300);
        }
    });
    
    backToTop.on('click', function(event){
        event.preventDefault();
        var scrollDistance = Math.abs($(window).scrollTop());
        
        var topScrollTime = getScrollTime(scrollDistance);
        
        $('body, html').animate({
            scrollTop: 0
        }, topScrollTime); 
    });
});

function getScrollOffset() {		
    var width = $(window).width();		
    if(width <= 768 && width > 480) {		
        return 120;		
    }		
    return 50;		
};

function getScrollTime(dist) {
    var minTime = 300;
    var maxTime = 1000;
    var time = 23 * Math.sqrt(dist);
    
    time = time < minTime ? minTime : time;
    time = time > maxTime ? maxTime : time;
    
    return time;
}