window.onload = function() {
    var loading = document.getElementById("loading");
    loading.className += " animated fadeOut";
    loading.style.zIndex = "-300";

    var contenidoHeader = document.getElementById("contenidoHeader");
    loading.className += " animated fadeIn";
    loading.style.opacity = "0";
}