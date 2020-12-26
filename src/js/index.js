function changeCadastro() {
    var x = document.getElementById("hiddencadastro");

    if (window.matchMedia("(min-width: 992px)").matches) {
        if (x.style.display === "block") {
            x.style.display = "none";
        }
    } else {
        x.style.display = "none";
    }
}


