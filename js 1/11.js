function perjungti() {
    var elementas = document.getElementById("paragrafas2")

    if (elementas.style.display == "none") {
        elementas.style.display = "block";
    } else {
        elementas.style.display = "none;"
    }
}

document.getElementById("mygtukas2").addEventListener("click", perjungti);