let oXML = loadXMLDoc("../pisos.xml");
let arrayViviendasTemp = oXML.querySelectorAll("vivienda");
let arrayViviendas = Array();
arrayViviendasTemp.forEach(vivienda => {
    arrayViviendas.push(new Vivienda(vivienda.querySelector("idVivienda").textContent,
                                    vivienda.querySelector("direccion").textContent,
                                    vivienda.querySelector("precioAlquiler").textContent,
                                    vivienda.querySelector("estadoDisponibilidad").textContent,
                                    vivienda.querySelector("imgPrincipal").textContent,
                                    vivienda.querySelector("numHabitaciones").textContent,
                                    vivienda.querySelector("descripcion").textContent,
                                    vivienda.querySelector("exterior").textContent,
                                    vivienda.querySelector("climatizacion").textContent, null));
});

let arrayClientesTemp = oXML.querySelectorAll("cliente");
let arrayClientes = Array();
arrayClientesTemp.forEach(cliente => {
    arrayClientes.push(new Cliente(cliente.querySelector("nombre").textContent,
                                    cliente.querySelector("apellidos").textContent,
                                    cliente.querySelector("dni").textContent,
                                    cliente.querySelector("telefono").textContent,
                                    cliente.querySelector("domicilio").textContent,
                                    cliente.querySelector("esPropierario").textContent));
});

let arrayAlquileresTemp = oXML.querySelectorAll("alquiler");
let arrayAlquileres = Array();
arrayAlquileresTemp.forEach(alquiler => {
    arrayAlquileres.push(new Alquiler(alquiler.querySelector("idAlquiler").textContent,
                                    alquiler.querySelector("idVivienda").textContent,
                                    alquiler.querySelector("dniCliente").textContent,
                                    alquiler.querySelector("fechaInicio").textContent,
                                    alquiler.querySelector("fechaFin").textContent));
});

let arrayCitasTemp = oXML.querySelectorAll("cita");
let arrayCitas = Array();
arrayCitasTemp.forEach(cita => {
    arrayCitas.push(new Cita(cita.querySelector("idCita").textContent,
                                    cita.querySelector("dniCliente").textContent,
                                    cita.querySelector("dniEmpleado").textContent,
                                    cita.querySelector("fecha").textContent,
                                    cita.querySelector("hora").textContent,
                                    cita.querySelector("descripcion").textContent));
});

let arrayEmpleadosTemp = oXML.querySelectorAll("empleado");
let arrayEmpleados = Array();
arrayEmpleadosTemp.forEach(emplado => {
    arrayEmpleados.push(new Empleado(emplado.querySelector("nombre").textContent,
                                    emplado.querySelector("apellidos").textContent,
                                    emplado.querySelector("dni").textContent,
                                    emplado.querySelector("telefono").textContent,
                                    emplado.querySelector("salario").textContent,
                                    emplado.querySelector("domicilio").textContent));
});

let arrayLimpiezasTemp = oXML.querySelectorAll("empleado");
let arrayLimpiezas = Array();
arrayLimpiezasTemp.forEach(limpieza => {
    arrayLimpiezas.push(new Limpieza(limpieza.querySelector("nombre").textContent,
                                    limpieza.querySelector("apellidos").textContent,
                                    limpieza.querySelector("dni").textContent,
                                    limpieza.querySelector("telefono").textContent,
                                    limpieza.querySelector("salario").textContent,
                                    limpieza.querySelector("domicilio").textContent));
});

function loadXMLDoc(filename) {
    let xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else { // code for IE5 and IE6
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();

    return xhttp.responseXML;
}