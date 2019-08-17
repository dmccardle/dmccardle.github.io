$(document).ready(function () {
    var $children = $("body").children();

    var time = 200;
    $("body").show();
    $children.each(function () {
        var current = $(this);
        setTimeout(function () {
            current.fadeIn(400);
        }, time);
        time += 800;
    });
})