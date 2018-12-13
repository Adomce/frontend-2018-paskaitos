var zodziai = ["medis", "gele", "dramblys", "asotis", "pomidoras"];
var sarasas = document.getElementById("zodziai");

zodziai.forEach(zodis => {
    var punktas = document.createElement("li");
    var testas = document.createTextNode(zodis);
    punktas.appendChild(tekstas);
    sarasas.appendChild(punktas);
});

document.getElementById("pirmas").innerHTML = "pirmas zodis" + zodziai[0];
document.getElementById("antras").innerHTML = "antras zodis" + zodziai[1];
document.getElementById("paskutinis").innerHTML = "paskutinis zodis" + zodziai[zodziai.length - 1];