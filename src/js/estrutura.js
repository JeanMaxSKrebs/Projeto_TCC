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
function navResponsive(x) {
    section =  document.getElementById("section");
    if (x.matches) {
        console.log("menor");
        section.style.marginTop = "200px";
    } else {
        console.log("maior");
        section.style.marginTop =  "100px";
    }
}

var x = window.matchMedia("(max-width: 991px)");
navResponsive(x);
x.addListener(navResponsive);
