$(document).ready(function() {
    var $children = $("body").children();
    var startTime = 1000;
    var increment = 400;

    $("body").fadeIn(startTime);
    $children.each(function() {
        $(this).fadeIn(startTime);
        startTime += increment;
    });
})