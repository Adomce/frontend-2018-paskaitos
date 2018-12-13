$(document).ready(function() {
    $("#dydis").on("click", function() {
        $(".tekstas").css("font-size", "2em");
        $(".tekstas").css("font-family", "fantasy");
    });
    $("#spalva").on("click", function () {
        $(".tekstas").css("color", "red");
    });
});