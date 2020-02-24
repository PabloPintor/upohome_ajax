//clase contenedora  UPOHOME
class UPOHOME{

    //contructor con arrays
    constructor(){
        this.arrayClientes = [];
        this.arrayAlquileres = [];
        this.arrayCitas = [];
        this.arrayEmpleados = [];
        this.arrayLimpiezas = [];
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
		let arrayEmpleadosTemp = oXML.querySelectorAll("empleado");
		let arrayEmpleados = Array();
		arrayEmpleadosTemp.forEach(emplado => {
			this.arrayEmpleados.push(new Empleado(emplado.querySelector("nombre").textContent,
											emplado.querySelector("apellidos").textContent,
											emplado.querySelector("dni").textContent,
											emplado.querySelector("telefono").textContent,
											emplado.querySelector("salario").textContent,
											emplado.querySelector("domicilio").textContent));
		});
		let arrayLimpiezasTemp = oXML.querySelectorAll("limpieza");
		let arrayLimpiezas = Array();

		arrayLimpiezasTemp.forEach(limpieza => {
			console.log(limpieza);
			this.arrayLimpiezas.push(new Limpieza(limpieza.querySelector("idlimpieza").textContent,
											limpieza.querySelector("idempleado").textContent,
											limpieza.querySelector("idvivienda").textContent,
											limpieza.querySelector("fecha").textContent,
											limpieza.querySelector("hora").textContent,
											limpieza.querySelector("finalizado").textContent));
		});
	}	
    altaCliente(oCliente) {
        let sMensaje = "";

        if (this.arrayClientes.filter(cliente => cliente.dni == oCliente.dni).length == 0) {
            this.arrayClientes.push(oCliente);
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
                sMensaje = "Vivienda eliminada correctamente.";
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
    //--//
    altaEmpleado(oEmpleado) {
        let sMensaje = "";

        if (this.arrayEmpleados.filter(empleado => empleado.dni == oEmpleado.dni).length == 0) {
            this.arrayEmpleados.push(oEmpleado);
            sMensaje = "Alta Empleado OK";
        } else {
            sMensaje = "Ese ID Empleado ya estaba dado de alta";
        }

        return sMensaje;
    }
    buscarEmpleado(sDNI){
        let resultado = null;

        this.arrayEmpleados.forEach(empleado => {
            if (empleado.dni == sDNI) {
                resultado = empleado;
            }
        });

        return resultado;
    }
    modificarEmpleado(sNombre, sApellidos, sDNI, iTelf, fSueldo, sDomicilio){
        let sMensaje = "No se ha podido modificar el empleado.";

        this.arrayEmpleados.forEach(empleado => {
            if (empleado.dni == sDNI) {
                empleado.nombre = sNombre;
                empleado.apellidos = sApellidos;
                empleado.telefono = iTelf;
                empleado.salario = fSueldo;
                empleado.domicilio = sDomicilio;

                sMensaje = "Empleado modificado correctamente.";
            }    
        });

        return sMensaje;
    }
    borrarEmpleado(sDni){
        let sMensaje = "No se ha podido borrar el empleado.";
        let oEmpleado = oUPOHOME.buscarEmpleado(sDni);
        if(oEmpleado != null) {
            let index = this.arrayEmpleados.indexOf(oEmpleado);
            if (index > -1) {
                this.arrayEmpleados.splice(index, 1);
                sMensaje = "Empleado eliminado correctamente.";
            }
        }
        
        return sMensaje;
    }
    //--//
    añadirLimpieza(oLimpieza) {
        let sMensaje = "";

        if (this.arrayLimpiezas.filter(limpieza => limpieza.idLimpieza == oLimpieza.idLimpieza).length == 0) {
            this.arrayLimpiezas.push(oLimpieza);
            sMensaje = "Limpieza asignada con exito";
        } else {
            sMensaje = "El ID de la limpieza esta duplicado";
        }

        return sMensaje;
    }
    buscarLimpieza(idLimpieza){
        let resultado = null;

        this.arrayLimpiezas.forEach(limpieza => {
            if (limpieza.idLimpieza == idLimpieza) {
                resultado = limpieza;
            }
        });

        return resultado;
    }
    modificarLimpieza(sIdLimpieza, sIdEmpleado, sIdVivienda, sFecha, sHora, bFinalizado){
        let sMensaje = "No se ha podido modificar la limpieza.";

        this.arrayLimpiezas.forEach(limpieza => {
            if (limpieza.idLimpieza == sIdLimpieza) {
                limpieza.idEmpleado = sIdEmpleado;
                limpieza.idVivienda = sIdVivienda;
                limpieza.fecha = sFecha;
                limpieza.hora = sHora;
                limpieza.finalizado = bFinalizado;

                sMensaje = "Limpieza modificada correctamente.";
            }    
        });

        return sMensaje;
    }
    borrarLimpieza(sIdLimpieza){
        let sMensaje = "No se ha podido borrar la limpieza.";
        let oLimpieza = oUPOHOME.buscarLimpieza(sIdLimpieza);
        if(oLimpieza != null) {
            let index = this.arrayLimpiezas.indexOf(oLimpieza);
            if (index > -1) {
                this.arrayLimpiezas.splice(index, 1);
                sMensaje = "Limpieza eliminada correctamente.";
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

class Empleado{

    constructor(nombre, apellidos, dni, telefono, salario, domicilio){
        this.nombre = nombre;           //string
        this.apellidos = apellidos;     //string
        this.dni = dni;                 //dni
        this.telefono = telefono;       //int
        this.salario = salario;         //float
        this.domicilio = domicilio;     //string
    }

    //metodos



}

class Limpieza{

    constructor(idLimpieza, idEmpleado, idVivienda, fecha, hora, finalizado){
        this.idLimpieza = idLimpieza    //int
        this.idEmpleado = idEmpleado;   //string (Añadido)
        this.idVivienda = idVivienda;   //int (Añadido)
        this.fecha = fecha;             //Date
        this.hora = hora;               //string
        this.finalizado = finalizado;   //boolean
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