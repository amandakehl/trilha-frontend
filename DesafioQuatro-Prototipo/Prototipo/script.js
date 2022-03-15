$(document).ready(function () {
    $("#hamburger").click(function () {
        $(".list-header").toggle()
    })
});

$(window).resize(function () {
    if ($(document).innerWidth() < 1080) {
        $(".list-header").css("display", "none")
    } else {
        $(".list-header").css("display", "inline");
    }
});