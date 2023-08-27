var divBoton = document.getElementById("div-boton");
var button = divBoton.querySelector("button");

divBoton.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

button.addEventListener("click", function(event) {
    event.stopPropagation(); 
});