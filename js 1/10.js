function lentele() {
    var skaicius = parseInt(document.getElementById("skaicius").value);

    var lentelesKodas = '<table border="1">';

    for (i = 1; i <= 10; i++) {
        lentelesKodas += "<tr>"
                        + "<td>" + skaicius +"</td>"
                        + "<td>*</td>"
                        + "<td>" + i + "</td>"
                        + "<td>" + (skaicius * i) + "</td>"
                        + "</tr>";
    }

    lentelesKodas += '</table>'

    document.getElementById("lentelesBlokas").innerHTML = lentelesKodas;
}