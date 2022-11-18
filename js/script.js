$(function () {
    $("nav>ul>li").mouseover(function () {
        $(this).children(".sub").stop().slideDown();
    });
    $("nav>ul>li").mouseout(function () {
        $(this).children(".sub").stop().slideUp();
    });
});