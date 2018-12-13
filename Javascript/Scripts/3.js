$(document).ready(function() {
    $("#laukelis").on("keyup", function () {
        var tekstas = $(this).val();
        $("#cia").text(tekstas);
    });
});