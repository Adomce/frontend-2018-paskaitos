$(document).ready(function() {
    $("button").on("click", function() {
        var tekstas = $("input").val();
        $("input").val("");
        $("ul").append("<li>" + tekstas + '<a href="Delete"></a>' + "</li>");
    });
});