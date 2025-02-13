//clase contenedora  UPOHOME
class UPOHOME {

    //contructor con arrays
    constructor() {
        this.arrayClientes = [];
        this.arrayAlquileres = [];
        this.arrayCitas = [];
        this.arrayViviendas = [];
    }
    //metodos

    crearTablaViviendas() {

        //crear tabla dom
        let oTabla = document.createElement("TABLE");
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        oTabla.setAttribute("id", "tablaListados");

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

    crearTablaClientes() {
        //crear tabla dom
        let oTabla = document.createElement("TABLE");
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        oTabla.setAttribute("id", "tablaListados");

        //encabezado
        let oTHead = oTabla.createTHead();
        let oFila = oTHead.insertRow(-1);

        //insertar filas thead, una detras de otra
        let oTH = oFila.insertCell(-1);
        oTH.textContent = "DNI";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "NOMBRE";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "APELLIDOS";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "TELEFONO";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "DOMICILIO";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "ES PROPIETARIO";

        //insertar filas tbody
        let oTBody = document.createElement("TBODY");
        oTabla.appendChild(oTBody);

        //insertar una fila
        this.arrayClientes.forEach(cliente => {
            oFila = oTBody.insertRow(-1);
            let oCelda = oFila.insertCell(-1);
            oCelda.textContent = cliente.dni;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cliente.nombre;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cliente.apellidos;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cliente.telefono;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cliente.domicilio;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cliente.esPropierario;
        });

        document.querySelector("#listados").appendChild(oTabla);
    }

    crearTablaCitas() {
        //crear tabla dom
        let oTabla = document.createElement("TABLE");
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        oTabla.setAttribute("id", "tablaListados");

        //encabezado
        let oTHead = oTabla.createTHead();
        let oFila = oTHead.insertRow(-1);

        //insertar filas thead, una detras de otra
        let oTH = oFila.insertCell(-1);
        oTH.textContent = "ID CITA";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "DNI CLIENTE";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "FECHA";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "HORA";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "DESCRIPCION";

        //insertar filas tbody
        let oTBody = document.createElement("TBODY");
        oTabla.appendChild(oTBody);

        //insertar una fila
        this.arrayCitas.forEach(cita => {
            oFila = oTBody.insertRow(-1);
            let oCelda = oFila.insertCell(-1);
            oCelda.textContent = cita.idCita;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cita.dniCliente;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cita.fecha;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cita.hora;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = cita.descripcion;
        });

        document.querySelector("#listados").appendChild(oTabla);
    }

    crearTablaAlquileres(){
        //crear tabla dom
        let oTabla = document.createElement("TABLE");
        oTabla.classList.add("table");
        oTabla.classList.add("table-striped");
        oTabla.setAttribute("id", "tablaListados");

        //encabezado
        let oTHead = oTabla.createTHead();
        let oFila = oTHead.insertRow(-1);

        //insertar filas thead, una detras de otra
        let oTH = oFila.insertCell(-1);
        oTH.textContent = "ID ALQUILER";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "ID VIVIENDA";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "DNI CLIENTE";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "FECHA INICIO";
        oTH = oFila.insertCell(-1);
        oTH.textContent = "FECHA FIN";

        //insertar filas tbody
        let oTBody = document.createElement("TBODY");
        oTabla.appendChild(oTBody);

        //insertar una fila
        this.arrayAlquileres.forEach(alquiler => {
            oFila = oTBody.insertRow(-1);
            let oCelda = oFila.insertCell(-1);
            oCelda.textContent = alquiler.idAlquiler;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = alquiler.idVivienda;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = alquiler.dniCliente;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = alquiler.fechaInicio;

            oCelda = oFila.insertCell(-1);
            oCelda.textContent = alquiler.fechaFin;
        });

        document.querySelector("#listados").appendChild(oTabla);
    }


    rellenarArrays() {
        var arrayClientesTemp = this.arrayClientes;
        var arrayAlquileresTemp = this.arrayAlquileres;
        var arrayViviendasTemp = this.arrayViviendas;
        var arrayCitasTemp = this.arrayCitas;

        //CLIENTES
        $.post("../php/getClientes.php", {}, function (data, textStatus, jqXHR) {
            for (var i = 0; i < data.length; i++) {
                arrayClientesTemp.push(new Cliente(data[i].nombre,
                    data[i].apellidos,
                    data[i].dniCliente,
                    data[i].telefono,
                    data[i].domicilio,
                    data[i].esPropietario));
            }
        }, "json");

        //ALQUILERES
        $.post("../php/getAlquileres.php", {}, function (data, textStatus, jqXHR) {
            for (var i = 0; i < data.length; i++) {
                arrayAlquileresTemp.push(new Alquiler(data[i].idAlquiler,
                    data[i].idVivienda,
                    data[i].dniCliente,
                    data[i].fechaInicio,
                    data[i].fechaFin));
            }
        }, "json");

        //VIVIENDAS
        $.post("../php/getViviendas.php", {}, function (data, textStatus, jqXHR) {
            for (var i = 0; i < data.length; i++) {
                arrayViviendasTemp.push(new Vivienda(data[i].idVivienda,
                    data[i].direccion,
                    data[i].precioAlquiler,
                    data[i].estadoDisponibilidad,
                    data[i].imgPrincipal,
                    data[i].numHabitaciones,
                    data[i].descripcion,
                    data[i].exterior,
                    data[i].climatizacion));
            }
        }, "json");

        //CITAS
        $.post("../php/getCitas.php", {}, function (data, textStatus, jqXHR) {
            for (var i = 0; i < data.length; i++) {
                arrayCitasTemp.push(new Cita(data[i].idCita,
                    data[i].dni,
                    data[i].fecha,
                    data[i].hora,
                    data[i].descripcion));
            }
        }, "json");
    }

    altaCliente(oCliente) {
        let sMensaje = "";

        if (this.arrayClientes.filter(cliente => cliente.dni == oCliente.dni).length == 0) {
            this.arrayClientes.push(oCliente);
            $.post("../php/insertarClientes.php", { CLIENTE: JSON.stringify(oCliente) }, function (data, textStatus, jqXHR) {

            });
            sMensaje = "Alta cliente OK";
        } else {
            sMensaje = "El cliente ya estaba dado de alta";
        }

        return sMensaje;
    }
    buscarCliente(sDNI) {
        let resultado = null;

        this.arrayClientes.forEach(cliente => {
            if (cliente.dni == sDNI) {
                resultado = cliente;
            }
        });

        return resultado;
    }
    modificarCliente(sNombre, sApellidos, sDNI, iTelf, sDomicilio) {
        let sMensaje = "No se ha podido modificar el cliente.";

        this.arrayClientes.forEach(cliente => {
            if (cliente.dni == sDNI) {
                cliente.nombre = sNombre;
                cliente.apellidos = sApellidos;
                cliente.telefono = iTelf;
                cliente.domicilio = sDomicilio;
                let oCliente = oUPOHOME.buscarCliente(sDNI);
                $.post("../php/modificarCliente.php", { CLIENTE: JSON.stringify(oCliente) }, function (data, textStatus, jqXHR) {

                });
                sMensaje = "Cliente modificado correctamente.";
            }
        });

        return sMensaje;
    }
    borrarCliente(sDni) {
        let sMensaje = "No se ha podido borrar el cliente.";
        let oCliente = oUPOHOME.buscarCliente(sDni);
        if (oCliente != null) {
            let index = this.arrayClientes.indexOf(oCliente);
            if (index > -1) {
                this.arrayClientes.splice(index, 1);
                $.ajax({
                    type: 'GET',
                    url: "../php/borrarCliente.php",
                    data: "DNI=" + sDni,
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
            console.log(oAlquiler);
            $.post("../php/insertarAlquiler.php", { ALQUILER: JSON.stringify(oAlquiler) }, function (data, textStatus, jqXHR) {

            });
            sMensaje = "Alquiler realizado con éxito";
        } else {
            sMensaje = "El ID del alquiler esta duplicado";
        }

        return sMensaje;
    }

    buscarAlquiler(sIdAlquiler) {
        let resultado = null;

        this.arrayAlquileres.forEach(alquiler => {

            if (alquiler.idAlquiler == sIdAlquiler) {
                resultado = alquiler;
            }
        });

        return resultado;
    }

    modificarAlquiler(sIdAlquiler, sIdVivienda, sDniCliente, dFechaInicio, dFechaFin) {
        let sMensaje = "No se ha podido modificar el alquiler.";

        this.arrayAlquileres.forEach(alquiler => {
            if (alquiler.idAlquiler == sIdAlquiler) {
                let fechaInicioArray = dFechaInicio.split("/");
                let fechaFinArray = dFechaFin.split("/");
                let fechaInicio = fechaInicioArray[2] + "-" + fechaInicioArray[0] + "-" + fechaInicioArray[1];
                let fechaFin = fechaFinArray[2] + "-" + fechaFinArray[0] + "-" + fechaFinArray[1];
                alquiler.dniCliente = sDniCliente;
                alquiler.idVivienda = sIdVivienda;
                alquiler.fechaInicio = fechaInicio;
                alquiler.fechaFin = fechaFin;

                let oAlquiler = oUPOHOME.buscarAlquiler(sIdAlquiler);
                $.post("../php/modificarAlquiler.php", { ALQUILER: JSON.stringify(oAlquiler) }, function (data, textStatus, jqXHR) {

                });
                sMensaje = "Alquiler modificado correctamente.";
            }
        });

        return sMensaje;

    }

    borrarAlquiler(sIdAlquiler) {
        let sMensaje = "No se ha podido borrar el alquiler.";
        let oAlquiler = oUPOHOME.buscarAlquiler(sIdAlquiler);

        if (oAlquiler != null) {
            let index = this.arrayAlquileres.indexOf(oAlquiler);
            if (index > -1) {
                this.arrayAlquileres.splice(index, 1);
                $.post("../php/borrarAlquiler.php", { ALQUILER: sIdAlquiler }, function (data, textStatus, jqXHR) {

                });
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
            $.get("../php/insertarVivienda.php", { VIVIENDA: JSON.stringify(oVivienda) }, function (data, textStatus, jqXHR) {

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
    modificarVivienda(idVivienda, precioAlquiler, direccion, estadoDisponibilidad, numHabitaciones, descripcion, exterior, climatizacion) {
        let sMensaje = "No se ha podido modificar la vivienda.";

        this.arrayViviendas.forEach(vivienda => {
            if (vivienda.idVivienda == idVivienda) {
                vivienda.precioAlquiler = precioAlquiler
                vivienda.direccion = direccion;
                vivienda.estadoDisponibilidad = estadoDisponibilidad;
                vivienda.numHabitaciones = numHabitaciones;
                vivienda.descripcion = descripcion;
                vivienda.exterior = exterior;
                vivienda.climatizacion = climatizacion;

                let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
                $.post("../php/modificarVivienda.php", { VIVIENDA: JSON.stringify(oVivienda) }, function (data, textStatus, jqXHR) {

                });
                sMensaje = "Vivienda modificada correctamente.";
            }
        });

        return sMensaje;
    }
    borrarVivivenda(idVivienda) {
        let sMensaje = "No se ha podido borrar la vivienda.";

        let oVivienda = oUPOHOME.buscarVivienda(idVivienda);

        if (oVivienda != null) {
            let index = this.arrayViviendas.indexOf(oVivienda);
            if (index > -1) {
                this.arrayViviendas.splice(index, 1);
                //AJAX SIN JQUERY
                var oAJAX = null;
                oAJAX = objetoXHR();
                var sParametros = "id=" + idVivienda;
                oAJAX.addEventListener("readystatechange", function () {
                    sMensaje = "Vivienda eliminada correctamente.";
                });
                oAJAX.open("GET", encodeURI("../php/borrarVivienda.php?" + sParametros), true);
                oAJAX.send(null);


            }
        }

        return sMensaje;
    }
    //--//
    altaCita(oCita) {
        let sMensaje = "";

        if (this.arrayCitas.filter(cita => cita.idCita == oCita.idCita).length == 0) {
            this.arrayCitas.push(oCita);
            console.log(oCita);
            $.post("../php/insertarCita.php", { CITA: JSON.stringify(oCita) }, function (data, textStatus, jqXHR) {

            });
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
    modificarCita(iId, sDniCliente, sFecha, sHora, sDescripcion) {
        let sMensaje = "No se ha podido modificar la cita.";

        this.arrayCitas.forEach(cita => {
            if (cita.idCita == iId) {
                let fechaArray = sFecha.split("/");
                let fecha = fechaArray[2] + "-" + fechaArray[0] + "-" + fechaArray[1];
                cita.dniCliente = sDniCliente;
                cita.fecha = fecha;
                cita.hora = sHora;
                cita.descripcion = sDescripcion;

                let oCita = oUPOHOME.buscarCita(iId);
                console.log(oCita);
                $.post("../php/modificarCita.php", { CITA: JSON.stringify(oCita) }, function (data, textStatus, jqXHR) {

                });
                sMensaje = "Cita modificada correctamente.";
            }
        });

        return sMensaje;
    }
    borrarCita(sId) {
        let sMensaje = "No se ha podido borrar la cita.";
        let oCita = oUPOHOME.buscarCita(sId);
        if (oCita != null) {
            let index = this.arrayCitas.indexOf(oCita);
            if (index > -1) {
                this.arrayCitas.splice(index, 1);
                $.post("../php/borrarCita.php", { CITA: sId }, function (data, textStatus, jqXHR) {

                });
                sMensaje = "Cita eliminada correctamente.";
            }
        }

        return sMensaje;
    }

}
//----------------------------------------------------------------------------//
class Cliente {

    constructor(nombre, apellidos, dni, telefono, domicilio, esPropierario) {
        this.nombre = nombre;               //string
        this.apellidos = apellidos;         //string
        this.dni = dni;                     //string
        this.telefono = telefono;           //int
        this.domicilio = domicilio;         //string
        this.esPropierario = esPropierario; //boolean
    }

    //metodos


}

class Alquiler {

    constructor(idAlquiler, idVivienda, dniCliente, fechaInicio, fechaFin) {
        this.idAlquiler = idAlquiler;       //int
        this.idVivienda = idVivienda;       //int (Añadido)
        this.dniCliente = dniCliente;       //string (Añadido)
        this.fechaInicio = fechaInicio;     //Date
        this.fechaFin = fechaFin;           //Date
    }

    //metodos


}

class Imagen {

    constructor(imagen, descripcion) {
        this.imagen = imagen;               //string (ruta de la imagen)
        this.descripcion = descripcion;     //string
    }

    //metodos


}

class Vivienda {

    constructor(idVivienda, direccion, precioAlquiler, estadoDisponibilidad, imgPrincipal, numHabitaciones, descripcion, exterior, climatizacion, arrayImagen) {
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

class Cita {

    constructor(idCita, dniCliente, fecha, hora, descripcion) {
        this.idCita = idCita;               //int
        this.dniCliente = dniCliente;       //String
        this.fecha = fecha;                 //date
        this.hora = hora;                   //string
        this.descripcion = descripcion;     //string
    }

    //metodos



}
