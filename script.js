const botonModo = document.getElementById("btnModoOscuro");
botonModo.addEventListener("click",function(){
    document.body.classList.toggle("modo-oscuro");
    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "☀️";
    } else {
        botonModo.textContent = "🌙";
    }
})