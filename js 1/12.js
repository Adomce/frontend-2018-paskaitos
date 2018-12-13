function perjungti() {
    var elementas = document.getElementById("paragrafas3")

    if (elementas.style.opacity == 0) {
        elementas.style.opacity = 1;
    } else {
        elementas.style.opacity = 0;
    }
}

document.getElementById("mygtukas3").addEventListener("click", perjungti);