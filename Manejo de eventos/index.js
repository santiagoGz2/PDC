const miBoton = document.getElementById("miBoton");
function handleClick(){
    alert("Hola! has hecho click en el boton");
}
miBoton.addEventListener("click", function(){
    alert("has hecho click!");
});