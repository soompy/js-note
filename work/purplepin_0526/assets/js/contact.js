function songpa() {
    var popup1 = document.getElementById("songpaPopup");
    popup1.classList.add("show");
}


function geumgok() {
    var popup2 = document.getElementById("geumgokPopup");
    popup2.classList.add("show");
}

function closed() {
    var popup1 = document.getElementById("songpaPopup");
    var popup2 = document.getElementById("geumgokPopup");
    var popup3 = document.getElementById("facilityModal");
    popup1.classList.remove("show");
    popup2.classList.remove("show");
    popup3.classList.remove("show");
}