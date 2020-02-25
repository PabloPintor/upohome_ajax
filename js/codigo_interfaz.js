//
// EVENTOS BOTONES MENU
//

//CLIENTE

document.getElementById("btnMenuDarAlta").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#altaCliente").style.display = "block";
}, false);

document.getElementById("btnMenuModCliente").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarCliente").style.display = "block";
}, false);

document.getElementById("btnMenuDarBaja").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#bajaCliente").style.display = "block";
}, false);


//ALQUILER

document.getElementById("btnMenuAlquilar").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#alquilar").style.display = "block";
}, false);

document.getElementById("btnMenuModAlquier").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarAlquiler").style.display = "block";
}, false);

document.getElementById("btnMenuElimiarAlquiler").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#eliminarAlquiler").style.display = "block";
}, false);


//VIVIENDA

document.getElementById("btnMenuAgregarVivienda").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#agregarVivienda").style.display = "block";
}, false);

document.getElementById("btnMenuModVivienda").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarVivienda").style.display = "block";
}, false);

document.getElementById("btnMenuEliminarVivienda").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#eliminarVivienda").style.display = "block";
}, false);


//CITAS

document.getElementById("btnMenuCrearCita").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#asignarCita").style.display = "block";
}, false);

document.getElementById("btnMenuModCita").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#cargarCita").style.display = "block";
}, false);

document.getElementById("btnMenuEliminarCita").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#eliminarCita").style.display = "block";
}, false);

//LISTAR

document.getElementById("btnListarViviendas").addEventListener("click", function() {
    ocultarFormularios();
    document.querySelector("#listados").style.display = "block";
}, false);


//funcion que oculta todos los formularios
function ocultarFormularios() {
    let arrayDivsFormularios = document.querySelectorAll(".divFormulario");
    arrayDivsFormularios.forEach(div => {
        div.style.display = "none";
    });
    //Reseteamos todos los formularios
    let arrayFormularios = document.querySelectorAll(".divFormulario form");
    arrayFormularios.forEach(div => {
        div.reset();
    });
}