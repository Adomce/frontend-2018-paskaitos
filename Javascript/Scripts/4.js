$(document).ready(function() {
    $("#prideti").on("click", function () {
        var tekstas = $("#laukelis2").val();
        $("#laukelis2").val("");
        $("#cia2").append("<li>" + tekstas + "</li>");
    });
});