function suma() {
    var pirmas = parseInt(document.getElementById("pirmas").value);
    var antras = parseInt(document.getElementById("antras").value);
    var suma = pirmas + antras;
    document.getElementById("suma").innerHTML = "Atsakymas: " + suma;
}