$(document).ready(function () {

    $('#involvements .content-box ul li').on('click', function () {
        $(this).toggleClass('opened');
        $(this).next('div').toggleClass('hidden');
    });
});