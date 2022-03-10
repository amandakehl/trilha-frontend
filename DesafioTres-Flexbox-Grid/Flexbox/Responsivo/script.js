$(document).ready(function () {
    $("img").click(function () {
        $(".menu-items").toggle()
    })
});

$(window).resize(function () {
    if ($(document).innerWidth() < 600) {
        $(".menu-items").css("display", "none")
    } else {
        $(".menu-items").css("display", "flex");
    }
});