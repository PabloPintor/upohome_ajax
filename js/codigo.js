var oUPOHOME = new UPOHOME();

//CAMBIAR DATEPICKER A ESPAÑOL
/*
$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);
*/
$(document).ready(function () {
    $.getScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js");
    $('#navbar').load("navbar.html", {}, function (response, status, request) {
        $.getScript("../js/codigo_interfaz.js");
    });
    oUPOHOME.rellenarArrays();

    //CARGAR DATEPICKER UI
    var dateFormat = "mm/dd/yyyy";
    var from1 = $(frmAlquilar.fechaInicio).datepicker()
        .on( "change", function() {
            to1.datepicker( "option", "minDate", getDate( this ) );
        });
    var to1 = $(frmAlquilar.fechaFin).datepicker()
        .on( "change", function() {
            from1.datepicker( "option", "maxDate", getDate( this ) );
        });

    var from2 = $(frmModificarAlquiler.fechaInicio).datepicker()
        .on( "change", function() {
            to2.datepicker( "option", "minDate", getDate( this ) );
        });  
    var to2 = $(frmModificarAlquiler.fechaFin).datepicker()
        .on( "change", function() {
            from2.datepicker( "option", "maxDate", getDate( this ) );
        });
    $(frmAsignarCita.fecha).datepicker();
    $(frmModificarCita.fecha).datepicker();

    //DIALOG
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
    });
    


    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
});
function objetoXHR() {
    if (window.XMLHttpRequest) {
        // El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {} //Capturamos el error,
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}
//ADD_EVENT_LISTENER
//Cliente
frmAltaCliente.btnAceptarAltaCliente.addEventListener("click", altaCliente,false);
frmCargarCliente.btnCargarCliente.addEventListener("click", cargarCliente, false);
frmModificarCliente.btnAceptarModificarCliente.addEventListener("click", modificarCliente, false);
frmBajaCliente.btnAceptarBajaCliente.addEventListener("click", borrarCliente, false);
//Alquiler
frmAlquilar.btnAceptarAlquiler.addEventListener("click", altaAlquiler,false);
frmCargarAlquiler.btnCargarAlquiler.addEventListener("click", cargarAlquiler,false);
frmModificarAlquiler.btnAceptarModificarAlquiler.addEventListener("click", modificarAlquiler,false);
frmEliminarAlquiler.btnEliminarAlquiler.addEventListener("click", borrarAlquiler,false);
//Vivienda
frmAgregarVivienda.btnAceptarVivienda.addEventListener("click", agregarVivienda, false);
frmCargarVivienda.btnCargarVivienda.addEventListener("click", cargarVivienda, false);
frmModificarVivienda.btnModificarVivienda.addEventListener("click", modificarVivienda, false);
frmEliminarVivienda.btnEliminarVivienda.addEventListener("click", borrarVivienda, false);
//Citas
frmAsignarCita.btnAceptarCita.addEventListener("click", altaCita, false);
frmCargarCita.btnCargarCita.addEventListener("click", cargarCita, false);
frmModificarCita.btnModificarCita.addEventListener("click", modificarCita, false);
frmEliminarCita.btnEliminarCita.addEventListener("click", borrarCita, false);

//-----------------------------------------------------------------------------------------------//
//Datos de prueba
//oUPOHOME.rellenarArrays();
/*
    oUPOHOME.altaCliente(new Cliente("Manuel Esteban", "Rodríguez Gómez", "1", "608995074", "Larra 29", false));
    oUPOHOME.altaCliente(new Cliente("Pablo", "Pintor Álvarez", "2", "666888111", "Roble 32", false));
    oUPOHOME.altaCliente(new Cliente("Juan", "Pérez Varela", "3", "111222333", "Arenal 14", false));

    oUPOHOME.agregarVivienda(new Vivienda("1", "Larra", "25000", true, "", "4", "aaa bbb ccc", "Roble", false, []));
    
    oUPOHOME.altaEmpleado(new Empleado("Jose", "Fernandez", "25", "111", "950","Abeto 45"));
    */
//-----------------------------------------------------------------------------------------------//
//CLIENTE

setTimeout(function(){oUPOHOME.crearTablaViviendas();}, 1000);
setTimeout(function(){oUPOHOME.crearTablaClientes();}, 1000);
setTimeout(function(){oUPOHOME.crearTablaCitas();}, 1000);
setTimeout(function(){oUPOHOME.crearTablaAlquileres();}, 1000);

function altaCliente(){
    let bValido = true;
    let msgError = "";
    
    let sNombre = frmAltaCliente.txtNombre.value.trim();
    let sApellidos = frmAltaCliente.txtApellidos.value.trim();
    let sDNI = frmAltaCliente.txtDNI.value.trim();
    let iTelf = parseInt(frmAltaCliente.txtTelefono.value);
    let sDomicilio = frmAltaCliente.txtDomicilio.value.trim();

    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    let oExpRegTelf = /^[0-9]{9}$/;
    if (!oExpRegDNI.test(sDNI)) {
        msgError += "\nEl DNI debe ser valido.";
        bValido = false;
    }
    if (!oExpRegTelf.test(iTelf)) {
        msgError += "\nEl telefono tiene longitud de 9 numeros.";
        bValido = false;
    }
    if(sNombre == "" || sApellidos == "" || sDomicilio == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){
        // Creamos el objeto Cliente
        let oCliente = new Cliente(sNombre, sApellidos, sDNI, iTelf, sDomicilio, false);

        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.altaCliente(oCliente);

        $('#dialog p').text(sMensaje);
        $('#dialog').dialog('open');
        if(sMensaje == "Alta cliente OK") {
            ocultarFormularios(); 
        }
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
        //$('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
    
}
function cargarCliente(){
    let bValido = true;
    let msgError = "";

    let sDni = frmCargarCliente.txtDNI.value.trim();

    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegDNI.test(sDni)) {
        msgError += "\nEl DNI debe ser valido.";
        bValido = false;
    }

    if(bValido) {
        let oCliente = oUPOHOME.buscarCliente(sDni);
        if(oCliente == null){
            $('#dialog p').text("No se encuentran datos del cliente.");
            $('#dialog').dialog('open');
        }else{
            document.querySelector("#modificarCliente").style.display = "block";
            frmModificarCliente.txtNombre.value = oCliente.nombre;
            frmModificarCliente.txtApellidos.value = oCliente.apellidos;
            frmModificarCliente.txtDNI.value = sDni;
            frmModificarCliente.txtTelefono.value = oCliente.telefono;
            frmModificarCliente.txtDomicilio.value = oCliente.domicilio;
        }
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
function modificarCliente(){
    let bValido = true;
    let msgError = "";

    let sNombre = frmModificarCliente.txtNombre.value.trim();
    let sApellidos = frmModificarCliente.txtApellidos.value.trim();
    let sDNI = frmModificarCliente.txtDNI.value.trim();
    let iTelf = parseInt(frmModificarCliente.txtTelefono.value);
    let sDomicilio = frmModificarCliente.txtDomicilio.value.trim();

    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    let oExpRegTelf = /^[0-9]{9}$/;
    if (!oExpRegDNI.test(sDNI)) {
        msgError += "\nEl DNI debe ser valido.";
        bValido = false;
    }
    if (!oExpRegTelf.test(iTelf)) {
        msgError += "\nEl telefono tiene longitud de 9 numeros.";
        bValido = false;
    }
    if(sNombre == "" || sApellidos == "" || sDomicilio == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }    
    if(bValido) {
        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.modificarCliente(sNombre, sApellidos, sDNI, iTelf, sDomicilio);

        $('#dialog p').text(sMensaje);
        $('#dialog').dialog('open');
        if(sMensaje == "Cliente modificado correctamente."){ 
            ocultarFormularios();
        }
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
        
}
function borrarCliente(){
    let bValido = true;
    let msgError = "";

    let sDni = frmBajaCliente.txtDNI.value.trim();

    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegDNI.test(sDni)) {
        msgError += "\nEl DNI debe ser valido.";
        bValido = false;
    }
    if(bValido) { 
        let sMensaje = oUPOHOME.borrarCliente(sDni);

        $('#dialog p').text(sMensaje);
        $('#dialog').dialog('open');
        if(sMensaje == "Cliente eliminado correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
//-----------------------------------------------------------------------------------------------//
//ALQUILER
function altaAlquiler(){
    let bValido = true;
    let msgError = "";

    let sId = parseInt(frmAlquilar.txtId.value);
    let sIdVivienda = parseInt(frmAlquilar.txtIdVivienda.value);
    let sDNI = frmAlquilar.txtDNI.value.trim();
    let sFechaInicio = frmAlquilar.fechaInicio.value.trim();
    let sFechaFin = frmAlquilar.fechaFin.value.trim();

    let oExpRegID = /^[0-9]*$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegID.test(sId)) {
        msgError += "\nID alquiler debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegID.test(sIdVivienda)) {
        msgError += "\nID vivienda debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDNI)) {
        msgError += "\nEl DNI debe ser valido.";
        bValido = false;
    }
    if( sFechaInicio == "" || sFechaFin == "" ){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){
        let oCliente = oUPOHOME.buscarCliente(sDNI);
        let oVivienda = oUPOHOME.buscarVivienda(sIdVivienda);
        if(oCliente != null){
            if(oVivienda != null){
                let oAlquiler = new Alquiler(sId, sIdVivienda, sDNI, sFechaInicio, sFechaFin);

                let sMensaje = oUPOHOME.añadirAlquiler(oAlquiler);

                $('#dialog p').text(sMensaje);
                $('#dialog').dialog('open');
                if(sMensaje == "Alquiler realizado con éxito"){
                    ocultarFormularios();   
                }
            }else{
                $('#dialog p').text("No existe la vivienda.");
                $('#dialog').dialog('open');
            }
        }else{
            $('#dialog p').text("No existe el cliente.");
            $('#dialog').dialog('open');
        }        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
function cargarAlquiler() {
    let bValido = true;
    let msgError = "";

    let idAlquiler = parseInt(frmCargarAlquiler.txtID.value);

    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(idAlquiler)) {
        msgError += "\nID alquiler debe ser un numero.";
        bValido = false;
    }
    if(bValido){
        let oAlquiler = oUPOHOME.buscarAlquiler(idAlquiler);
        if(oAlquiler == null){
            $('#dialog p').text("No se encuentran datos del alquiler.");
            $('#dialog').dialog('open');
        }else{
            document.querySelector("#modificarAlquiler").style.display = "block";
            console.log(oAlquiler);
            let fechaInicioArray = oAlquiler.fechaInicio.split("-");
            let fechaFinArray = oAlquiler.fechaFin.split("-");
            let fechaInicio = fechaInicioArray[1]+"/"+fechaInicioArray[2]+"/"+fechaInicioArray[0];
            let fechaFin = fechaFinArray[1]+"/"+fechaFinArray[2]+"/"+fechaFinArray[0];
            frmModificarAlquiler.txtId.value = idAlquiler;
            frmModificarAlquiler.txtIdVivienda.value = oAlquiler.idVivienda;
            frmModificarAlquiler.txtDNI.value = oAlquiler.dniCliente;
            frmModificarAlquiler.fechaInicio.value = fechaInicio;
            frmModificarAlquiler.fechaFin.value = fechaFin;
        } 
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
    
} 
function modificarAlquiler(){
    let bValido = true;
    let msgError = "";

    //modificarAlquiler(sIdAlquiler, sDniCliente, sIdVivienda, dFechaInicio, dFechaFin)
    let sId = parseInt(frmModificarAlquiler.txtId.value);
    let sIdVivienda = parseInt(frmModificarAlquiler.txtIdVivienda.value);
    let sDNI = frmModificarAlquiler.txtDNI.value.trim();
    let sFechaInicio = frmModificarAlquiler.fechaInicio.value.trim();
    let sFechaFin = frmModificarAlquiler.fechaFin.value.trim();

    let oExpRegID = /^[0-9]*$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegID.test(sId)) {
        msgError += "\nID alquiler debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegID.test(sIdVivienda)) {
        msgError += "\nID vivienda debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDNI)) {
        msgError += "\nEl DNI debe ser valido.";
        bValido = false;
    }
    if( sFechaInicio == "" || sFechaFin == "" ){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){
        let oCliente = oUPOHOME.buscarCliente(sDNI);
        if(oCliente != null){
            let sMensaje = oUPOHOME.modificarAlquiler(sId, sIdVivienda, sDNI, sFechaInicio, sFechaFin);

            $('#dialog p').text(sMensaje);
            $('#dialog').dialog('open');
            if(sMensaje == "Alquiler modificado correctamente."){ 
                ocultarFormularios();
            }
        }else{
            $('#dialog p').text("No existe el cliente.");
            $('#dialog').dialog('open');
        }

    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
function borrarAlquiler(){
    let bValido = true;
    let msgError = "";
    
    let sId = parseInt(frmEliminarAlquiler.txtID.value);

    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(sId)) {
        msgError += "\nID alquiler debe ser un numero.";
        bValido = false;
    }

    if(bValido){
        let sMensaje = oUPOHOME.borrarAlquiler(sId);

        $('#dialog p').text(sMensaje);
$('#dialog').dialog('open');
        if(sMensaje == "Alquiler eliminado correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
//-----------------------------------------------------------------------------------------------//
//VIVIENDA
function agregarVivienda(){
    let bValido = true;
    let msgError = "";

    let idVivienda = parseInt(frmAgregarVivienda.txtId.value.trim());
    let direccion = frmAgregarVivienda.txtDireccion.value.trim();
    let precioAlquiler = parseFloat(frmAgregarVivienda.txtPrecio.value.trim());
    let estadoDisponibilidad = frmAgregarVivienda.chkDisponible.checked;
    let imgPrincipal = "";
    let numHabitaciones = parseInt(frmAgregarVivienda.txtHabitaciones.value);
    let descripcion = frmAgregarVivienda.txtDescripcion.value.trim();
    let exterior = frmAgregarVivienda.txtExterior.value.trim();
    let climatizacion = frmAgregarVivienda.chkClimatizado.checked;
    let arrayImagen = [];

    let oExpRegID = /^[0-9]*$/;
    let oExpRegFloat = /^([0-9]*[.])?[0-9]*$/;
    if (!oExpRegID.test(idVivienda)) {
        msgError += "\nID Vivienda debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegFloat.test(precioAlquiler)) {
        msgError += "\nPrecio de alquiler debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegID.test(numHabitaciones)) {
        msgError += "\nNumero de habitaciones debe ser un numero.";
        bValido = false;
    }
    if( exterior == "" || direccion == "" || descripcion == "" ){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){
        let oVivienda = new Vivienda(idVivienda, direccion, precioAlquiler, estadoDisponibilidad, imgPrincipal, numHabitaciones, descripcion, exterior, climatizacion, arrayImagen);

        let sMensaje = oUPOHOME.agregarVivienda(oVivienda);

        $('#dialog p').text(sMensaje);
$('#dialog').dialog('open');
        if(sMensaje == "Alta vivienda OK"){
            ocultarFormularios();   
        }    
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
function cargarVivienda(){
    let bValido = true;
    let msgError = "";

    let idVivienda = parseInt(frmCargarVivienda.txtID.value.trim());

    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(idVivienda)) {
        msgError += "\nID vivienda debe ser un numero.";
        bValido = false;
    }
    if(bValido){
        let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
        if(oVivienda == null){
            $('#dialog p').text("No se encuentran datos de la vivienda.");
            $('#dialog').dialog('open');
        }else{
            document.querySelector("#modificarVivienda").style.display = "block";
            frmModificarVivienda.txtId.value = idVivienda;
            frmModificarVivienda.txtDireccion.value = oVivienda.direccion;
            frmModificarVivienda.txtPrecio.value = oVivienda.precioAlquiler;
            frmModificarVivienda.chkDisponible.checked = oVivienda.estadoDisponibilidad;
            frmModificarVivienda.txtHabitaciones.value = oVivienda.numHabitaciones;
            frmModificarVivienda.txtDescripcion.value = oVivienda.descripcion;
            frmModificarVivienda.txtExterior.value = oVivienda.exterior;
            frmModificarVivienda.chkClimatizado.checked = oVivienda.climatizacion;

        } 
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
      
}
function modificarVivienda() {
    let bValido = true;
    let msgError = "";

    let idVivienda = parseInt(frmModificarVivienda.txtId.value.trim());
    let direccion = frmModificarVivienda.txtDireccion.value.trim();
    let precioAlquiler = parseFloat(frmModificarVivienda.txtPrecio.value);
    let estadoDisponibilidad = frmModificarVivienda.chkDisponible.checked;
    let imgPrincipal = "";
    let numHabitaciones = parseInt(frmModificarVivienda.txtHabitaciones.value);
    let descripcion = frmModificarVivienda.txtDescripcion.value.trim();
    let exterior = frmModificarVivienda.txtExterior.value.trim();
    let climatizacion = frmModificarVivienda.chkClimatizado.checked;
    let arrayImagen = [];

    let oExpRegID = /^[0-9]*$/;
    let oExpRegFloat = /^([0-9]*[.])?[0-9]*$/;
    if (!oExpRegID.test(idVivienda)) {
        msgError += "\nID Vivienda debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegFloat.test(precioAlquiler)) {
        msgError += "\nPrecio de alquiler debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegID.test(numHabitaciones)) {
        msgError += "\nNumero de habitaciones debe ser un numero.";
        bValido = false;
    }
    if( exterior == "" || direccion == "" || descripcion == "" ){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){
        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.modificarVivienda(idVivienda, precioAlquiler, direccion, estadoDisponibilidad, numHabitaciones, descripcion, exterior, climatizacion);

        $('#dialog p').text(sMensaje);
        $('#dialog').dialog('open');
        if(sMensaje == "Vivienda modificada correctamente."){ 
            ocultarFormularios();
        }
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
function borrarVivienda() {
    let bValido = true;
    let msgError = "";

    let idVivienda = parseInt(frmEliminarVivienda.txtID.value);
    
    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(idVivienda)) {
        msgError += "\nID vivienda debe ser un numero.";
        bValido = false;
    }
    if(bValido){    
        let sMensaje = oUPOHOME.borrarVivivenda(idVivienda);

        $('#dialog p').text(sMensaje);
        $('#dialog').dialog('open');
        if(sMensaje == "Vivienda eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}
//-----------------------------------------------------------------------------------------------//
//CITAS
function altaCita() {
    let bValido = true;
    let msgError = "";

    let iId = parseInt(frmAsignarCita.txtId.value);
    let sFecha = frmAsignarCita.fecha.value.trim();
    let sHora = frmAsignarCita.txtHora.value.trim();
    let sDniCliente  = frmAsignarCita.txtDNICliente.value.trim();
    let sDescripcion = frmAsignarCita.txtDescripcion.value.trim();

    let oExpRegID = /^[0-9]*$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegID.test(iId)) {
        msgError += "\nID cita debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDniCliente)) {
        msgError += "\nDNI cliente debe ser un numero.";
        bValido = false;
    }
    if(sFecha == "" || sHora == "" || sDescripcion == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){   
        let oCliente = oUPOHOME.buscarCliente(sDniCliente);
        if(oCliente != null){
                let oCita = new Cita(iId, sDniCliente, sFecha, sHora, sDescripcion);
                let sMensaje = oUPOHOME.altaCita(oCita);

                $('#dialog p').text(sMensaje);
                $('#dialog').dialog('open');

                ocultarFormularios();   
        }else{
            $('#dialog p').text("No existe el cliente");
            $('#dialog').dialog('open');
        }
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
} 
function cargarCita() {
    let bValido = true;
    let msgError = "";

    let sId = frmCargarCita.txtID.value.trim();

    
    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(sId)) {
        msgError += "\nID cita debe ser un numero.";
        bValido = false;
    }
    if(bValido){   
        let oCita = oUPOHOME.buscarCita(sId);
        if(oCita == null){
            $('#dialog p').text("No existe cita con ese ID.");
            $('#dialog').dialog('open');
        }else{
            document.querySelector("#modificarCita").style.display = "block";
            let fechaArray = oCita.fecha.split("-");
            let fecha = fechaArray[1]+"/"+fechaArray[2]+"/"+fechaArray[0];
            frmModificarCita.txtId.value = sId;
            frmModificarCita.fecha.value = fecha;
            frmModificarCita.txtHora.value = oCita.hora;
            frmModificarCita.txtDNICliente.value = oCita.dniCliente;
            frmModificarCita.txtDescripcion.value = oCita.descripcion;
        }
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }

} 
function modificarCita() {
    let bValido = true;
    let msgError = "";

    let iId = parseInt(frmModificarCita.txtId.value);
    let sFecha = frmModificarCita.fecha.value.trim();
    let sHora = frmModificarCita.txtHora.value.trim();
    let sDniCliente  = frmModificarCita.txtDNICliente.value.trim();
    let sDescripcion = frmModificarCita.txtDescripcion.value.trim();

    let oExpRegID = /^[0-9]*$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegID.test(iId)) {
        msgError += "\nID cita debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDniCliente)) {
        msgError += "\nDNI cliente debe ser un numero.";
        bValido = false;
    }
    if(sFecha == "" || sHora == "" || sDescripcion == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    } 
    if(bValido){      
            let oCliente = oUPOHOME.buscarCliente(sDniCliente);
            if(oCliente != null){
                    let sMensaje = oUPOHOME.modificarCita(iId, sDniCliente, sFecha, sHora, sDescripcion);

                    $('#dialog p').text(sMensaje);
                    $('#dialog').dialog('open');
                    if(sMensaje == "Cita modificada correctamente."){
                        ocultarFormularios();
                    }
            }else{
                $('#dialog p').text("No existe el cliente");
                $('#dialog').dialog('open');
            }
            
        
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
} 
function borrarCita() {
    let bValido = true;
    let msgError = "";

    let sId = frmEliminarCita.txtID.value.trim();

    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(sId)) {
        msgError += "\nID cita debe ser un numero.";
        bValido = false;
    }
    if(bValido){   
        let sMensaje = oUPOHOME.borrarCita(sId);

        $('#dialog p').text(sMensaje);
        $('#dialog').dialog('open');
        if(sMensaje == "Cita eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        $('#dialog p').text(msgError);
        $('#dialog').dialog('open');
    }
}

/*
function crearTabla() {

    //crear tabla dom
    let oTabla = document.createElement("TABLE");
    oTabla.classList.add("table");
    oTabla.classList.add("table-striped");
    oTabla.setAttribute("border","1");
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
    oUPOHOME.arrayViviendas.forEach(vivienda => {
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = vivienda.idVivienda;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = vivienda.direccion;
    });

    document.querySelector("#listados").appendChild(oTabla);
}
*/