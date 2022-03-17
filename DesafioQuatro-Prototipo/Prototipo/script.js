$(document).ready(function () {
    if ($(document).innerWidth() < 1080) {
        $(".list-header").css("display", "none")
        $("#hamburger").click(function () {
            $(".list-header").toggle()
        });
    } else {
        $(".list-header").css("display", "inline");
    }
    
});

$(window).resize(function () {
    if ($(document).innerWidth() < 1080) {
        $(".list-header").css("display", "none")
    } else {
        $(".list-header").css("display", "inline");
    }
});