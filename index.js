// prevención del envio del formulario de contacto
document.getElementById("busqueda").addEventListener("click", (event) => {
    event.preventDefault();
    alert("El botón de búsqueda no está funcionando en este momento");
});

document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("El formulario no está funcionando en este momento");
});