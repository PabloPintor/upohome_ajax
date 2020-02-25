//clase contenedora  UPOHOME
class UPOHOME{

    //contructor con arrays
    constructor(){
        this.arrayClientes = [];
        this.arrayAlquileres = [];
        this.arrayCitas = [];
        this.arrayViviendas = [];
    }
    //metodos

    crearTabla() {

        //crear tabla dom
        let oTabla = document.createElement("TABLE");
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        oTabla.setAttribute("id","tablaListados");
    
        //encabezado
        let oTHead = oTabla.createTHead();
        let oFila = oTHead.insertRow(-1);
    
        //insertar filas thead, una detras de otra
        let oTH = oFila.insertCell(-1);
        oTH.textContent = "ID";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "DIRECCION";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "PRECIO";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "DISPONIBILIDAD";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "Nº HABITACIONES";
    
        //insertar filas tbody
        let oTBody = document.createElement("TBODY");
        oTabla.appendChild(oTBody);
    
        //insertar una fila
        this.arrayViviendas.forEach(vivienda => {
            oFila = oTBody.insertRow(-1);
            let oCelda = oFila.insertCell(-1);
            oCelda.textContent = vivienda.idVivienda;
    
            oCelda = oFila.insertCell(-1);
            oCelda.textContent = vivienda.direccion;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = vivienda.precioAlquiler;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = vivienda.estadoDisponibilidad;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = vivienda.numHabitaciones;
        });
    
        document.querySelector("#listados").appendChild(oTabla);
    }

	rellenarArrays(){
		let oXML = loadXMLDoc("../pisos.xml");
		let arrayViviendasTemp = oXML.querySelectorAll("vivienda");
		arrayViviendasTemp.forEach(vivienda => {
			this.arrayViviendas.push(new Vivienda(vivienda.querySelector("idvivienda").textContent,
											vivienda.querySelector("direccion").textContent,
											vivienda.querySelector("precioalquiler").textContent,
											vivienda.querySelector("estadodisponibilidad").textContent,
											vivienda.querySelector("imgprincipal").textContent,
											vivienda.querySelector("numhabitaciones").textContent,
											vivienda.querySelector("descripcion").textContent,
											vivienda.querySelector("exterior").textContent,
											vivienda.querySelector("climatizacion").textContent, null));
		});
		let arrayClientesTemp = oXML.querySelectorAll("cliente");
		let arrayClientes = Array();
		arrayClientesTemp.forEach(cliente => {
			this.arrayClientes.push(new Cliente(cliente.querySelector("nombre").textContent,
											cliente.querySelector("apellidos").textContent,
											cliente.querySelector("dni").textContent,
											cliente.querySelector("telefono").textContent,
											cliente.querySelector("domicilio").textContent,
											cliente.querySelector("espropietario").textContent));
		});
		let arrayAlquileresTemp = oXML.querySelectorAll("alquiler");
		let arrayAlquileres = Array();
		arrayAlquileresTemp.forEach(alquiler => {
			this.arrayAlquileres.push(new Alquiler(alquiler.querySelector("idalquiler").textContent,
											alquiler.querySelector("idvivienda").textContent,
											alquiler.querySelector("dnicliente").textContent,
											alquiler.querySelector("fechainicio").textContent,
											alquiler.querySelector("fechafin").textContent));
		});
		let arrayCitasTemp = oXML.querySelectorAll("cita");
		let arrayCitas = Array();
		arrayCitasTemp.forEach(cita => {
			this.arrayCitas.push(new Cita(cita.querySelector("idcita").textContent,
											cita.querySelector("dnicliente").textContent,
											cita.querySelector("dniempleado").textContent,
											cita.querySelector("fecha").textContent,
											cita.querySelector("hora").textContent,
											cita.querySelector("descripcion").textContent));
		});
	}	
    altaCliente(oCliente) {
        let sMensaje = "";

        if (this.arrayClientes.filter(cliente => cliente.dni == oCliente.dni).length == 0) {
            this.arrayClientes.push(oCliente);
            $.post("../php/insertarClientes.php", {CLIENTE: JSON.stringify(oCliente)}, function (data, textStatus, jqXHR) {
                
            });
            sMensaje = "Alta cliente OK";
        } else {
            sMensaje = "El cliente ya estaba dado de alta";
        }

        return sMensaje;
    }
    buscarCliente(sDNI){
        let resultado = null;

        this.arrayClientes.forEach(cliente => {
            if (cliente.dni == sDNI) {
                resultado = cliente;
            }
        });

        return resultado;
    }
    modificarCliente(sNombre, sApellidos, sDNI, iTelf, sDomicilio){
        let sMensaje = "No se ha podido modificar el cliente.";

        this.arrayClientes.forEach(cliente => {
            if (cliente.dni == sDNI) {
                cliente.nombre = sNombre;
                cliente.apellidos = sApellidos;
                cliente.telefono = iTelf;
                cliente.domicilio = sDomicilio;

                sMensaje = "Cliente modificado correctamente.";
            }    
        });

        return sMensaje;
    }
    borrarCliente(sDni){
        let sMensaje = "No se ha podido borrar el cliente.";
        let oCliente = oUPOHOME.buscarCliente(sDni);
        if(oCliente != null) {
            let index = this.arrayClientes.indexOf(oCliente);
            if (index > -1) {
                this.arrayClientes.splice(index, 1);
                $.ajax({
                    type : 'GET',
                    url: "../php/borrarCliente.php",
                    data: {DNI: sDni},
                    //dataType: "script",
                    success: function (response) {
                        
                    }
                });
                sMensaje = "Cliente eliminado correctamente.";
            }
        }
        
        return sMensaje;
    }
    //--//
    añadirAlquiler(oAlquiler) {
        let sMensaje = "";

        if (this.arrayAlquileres.filter(alquiler => alquiler.idAlquiler == oAlquiler.idAlquiler).length == 0) {
            this.arrayAlquileres.push(oAlquiler);
            sMensaje = "Alquiler realizado con éxito";
        } else {
            sMensaje = "El ID del alquiler esta duplicado";
        }

        return sMensaje;
    }

    buscarAlquiler(sIdAlquiler){
        let resultado = null;

        this.arrayAlquileres.forEach(alquiler => {
            
            if (alquiler.idAlquiler == sIdAlquiler) {
                resultado = alquiler;
            }
        });

        return resultado;
    }

    modificarAlquiler(sIdAlquiler, sIdVivienda, sDniCliente, dFechaInicio, dFechaFin){
        let sMensaje = "No se ha podido modificar el alquiler.";

        this.arrayAlquileres.forEach(alquiler => {
            if (alquiler.idAlquiler == sIdAlquiler) {
                alquiler.dniCliente = sDniCliente;
                alquiler.idVivienda = sIdVivienda;
                alquiler.fechaInicio = dFechaInicio;
                alquiler.fechaFin = dFechaFin;

                sMensaje = "Alquiler modificado correctamente.";
            }    
        });

        return sMensaje;

    }

    borrarAlquiler(sIdAlquiler){
        let sMensaje = "No se ha podido borrar el alquiler.";
        let oAlquiler = oUPOHOME.buscarAlquiler(sIdAlquiler);
        
        if(oAlquiler != null) {
            let index = this.arrayAlquileres.indexOf(oAlquiler);
            if (index > -1) {
                this.arrayAlquileres.splice(index, 1);
                sMensaje = "Alquiler eliminado correctamente.";
            }
        }
        
        return sMensaje;
    }
    //--//
    agregarVivienda(oVivienda) {
        let sMensaje = "";

        if (this.arrayViviendas.filter(vivienda => vivienda.idVivienda == oVivienda.idVivienda).length == 0) {
            this.arrayViviendas.push(oVivienda);
            $.get("../php/insertarVivienda.php", {VIVIENDA: JSON.stringify(oVivienda)}, function (data, textStatus, jqXHR) {
                    
            });
            sMensaje = "Alta vivienda OK";
        } else {
            sMensaje = "La vivienda ya estaba dado de alta";
        }

        return sMensaje;
    }
    buscarVivienda(idVivienda) {
        let resultado = null;
        
        this.arrayViviendas.forEach(vivienda => {
            
            if (vivienda.idVivienda == idVivienda) {
                resultado = vivienda;
            }
        });

        return resultado;
    }
    modificarVivienda(idVivienda, direccion, estadoDisponibilidad, numHabitaciones, descripcion, exterior, climatizacion){
        let sMensaje = "No se ha podido modificar la vivienda.";

        this.arrayViviendas.forEach(vivienda => {
            if (vivienda.idVivienda == idVivienda) {
                vivienda.direccion = direccion;
                vivienda.estadoDisponibilidad = estadoDisponibilidad;
                vivienda.numHabitaciones = numHabitaciones;
                vivienda.descripcion = descripcion;
                vivienda.exterior = exterior;
                vivienda.climatizacion = climatizacion;

                sMensaje = "Vivienda modificada correctamente.";
            }    
        });

        return sMensaje;
    }
    borrarVivivenda(idVivienda){
        let sMensaje = "No se ha podido borrar la vivienda.";
        
        let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
        
        if(oVivienda != null) {
            let index = this.arrayViviendas.indexOf(oVivienda);
            if (index > -1) {
                this.arrayViviendas.splice(index, 1);
                //AJAX SIN JQUERY
                var oAJAX = null;
                oAJAX = objetoXHR();
                var sParametros = "id="+idVivienda;
                oAJAX.addEventListener("readystatechange", function(){
                    sMensaje = "Vivienda eliminada correctamente.";
                });
                oAJAX.open("GET", encodeURI("../php/borrarVivienda.php?" + sParametros), true);
                oAJAX.send(null);

                
            }
        }
        
        return sMensaje;
    }
    //--//
    altaCita(oCita){
        let sMensaje = "";

        if (this.arrayCitas.filter(cita => cita.idCita == oCita.idCita).length == 0) {
            this.arrayCitas.push(oCita);
            sMensaje = "Alta Cita OK";
        } else {
            sMensaje = "Ese ID Cita ya estaba dado de alta";
        }

        return sMensaje;
    }
    buscarCita(sId) {
        let resultado = null;

        this.arrayCitas.forEach(cita => {
            if (cita.idCita == sId) {
                resultado = cita;
            }
        });

        return resultado;
    }
    modificarCita(iId, sDniCliente, sDniEmpleado, sFecha, sHora, sDescripcion){
        let sMensaje = "No se ha podido modificar la cita.";

        this.arrayCitas.forEach(cita => {
            if (cita.idCita == iId) {
                cita.dniCliente = sDniCliente;
                cita.dniEmpleado = sDniEmpleado;
                cita.fecha = sFecha;
                cita.hora = sHora;
                cita.descripcion = sDescripcion;

                sMensaje = "Cita modificada correctamente.";
            }    
        });

        return sMensaje;
    }
    borrarCita(sId){
        let sMensaje = "No se ha podido borrar la cita.";
        let oCita = oUPOHOME.buscarCita(sId);
        if(oCita != null) {
            let index = this.arrayCitas.indexOf(oCita);
            if (index > -1) {
                this.arrayCitas.splice(index, 1);
                sMensaje = "Cita eliminada correctamente.";
            }
        }
        
        return sMensaje;
    }

}
//----------------------------------------------------------------------------//
class Cliente{
    
    constructor(nombre, apellidos, dni, telefono, domicilio, esPropierario){
        this.nombre = nombre;               //string
        this.apellidos = apellidos;         //string
        this.dni = dni;                     //string
        this.telefono = telefono;           //int
        this.domicilio = domicilio;         //string
        this.esPropierario = esPropierario; //boolean
    }

    //metodos


}

class Alquiler{

    constructor(idAlquiler, idVivienda, dniCliente, fechaInicio, fechaFin){
        this.idAlquiler = idAlquiler;       //int
        this.idVivienda = idVivienda;       //int (Añadido)
        this.dniCliente = dniCliente;       //string (Añadido)
        this.fechaInicio = fechaInicio;     //Date
        this.fechaFin = fechaFin;           //Date
    }

    //metodos


}

class Imagen{

    constructor(imagen, descripcion){
        this.imagen = imagen;               //string (ruta de la imagen)
        this.descripcion = descripcion;     //string
    }

    //metodos


}

class Vivienda{

    constructor(idVivienda, direccion, precioAlquiler, estadoDisponibilidad, imgPrincipal, numHabitaciones, descripcion, exterior, climatizacion, arrayImagen){
        this.idVivienda = idVivienda;                       //int
        this.direccion = direccion;                         //string
        this.precioAlquiler = precioAlquiler;               //float
        this.estadoDisponibilidad = estadoDisponibilidad;   //boolean
        this.imgPrincipal = imgPrincipal;                   //Imagen
        this.numHabitaciones = numHabitaciones;             //int
        this.descripcion = descripcion;                     //string
        this.exterior = exterior;                           //string
        this.climatizacion = climatizacion;                 //boolean
        this.arrayImagen = arrayImagen;               //array (Añadido)
    }

    //metodos



}

class Cita{

    constructor(idCita, dniCliente, dniEmpleado, fecha, hora, descripcion){
        this.idCita = idCita;               //int
        this.dniCliente = dniCliente;       //String
        this.dniEmpleado = dniEmpleado;     //String
        this.fecha = fecha;                 //date
        this.hora = hora;                   //string
        this.descripcion = descripcion;     //string
    }

    //metodos

    

}

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