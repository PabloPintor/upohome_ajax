var oUPOHOME = new UPOHOME();

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
//Empleados
frmcontratarEmpleado.btnAceptarContratarEmpleado.addEventListener("click", contratarEmpleado, false);
frmCargarEmpleado.btnCargarEmpleado.addEventListener("click", cargarEmpleado, false);
frmModificarEmpleado.btnAceptarModificarEmpleado.addEventListener("click", modificarEmpleado, false);
frmDespedirEmpleado.btnAceptarBajaEmpleado.addEventListener("click", borrarEmpleado, false);
//Limpieza
frmAsignarLimpieza.btnAceptarLimpieza.addEventListener("click", asignarLimpieza, false);
frmCargarLimpieza.btnCargarLimpieza.addEventListener("click", cargarLimpieza, false);
frmModificarLimpieza.btnAceptarLimpieza.addEventListener("click", modificarLimpieza, false);
frmEliminarLimpieza.btnAceptarEliminarLimpieza.addEventListener("click", borrarLimpieza, false);
//-----------------------------------------------------------------------------------------------//
//Datos de prueba
oUPOHOME.rellenarArrays();
/*
    oUPOHOME.altaCliente(new Cliente("Manuel Esteban", "Rodríguez Gómez", "1", "608995074", "Larra 29", false));
    oUPOHOME.altaCliente(new Cliente("Pablo", "Pintor Álvarez", "2", "666888111", "Roble 32", false));
    oUPOHOME.altaCliente(new Cliente("Juan", "Pérez Varela", "3", "111222333", "Arenal 14", false));

    oUPOHOME.agregarVivienda(new Vivienda("1", "Larra", "25000", true, "", "4", "aaa bbb ccc", "Roble", false, []));
    
    oUPOHOME.altaEmpleado(new Empleado("Jose", "Fernandez", "25", "111", "950","Abeto 45"));
    */
//-----------------------------------------------------------------------------------------------//
//CLIENTE

oUPOHOME.crearTabla();

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

        alert(sMensaje);
        if(sMensaje == "Alta cliente OK") {
            ocultarFormularios(); 
        }
    }else{
        alert(msgError);
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
            alert("No se encuentran datos del cliente.");
        }else{
            document.querySelector("#modificarCliente").style.display = "block";
            frmModificarCliente.txtNombre.value = oCliente.nombre;
            frmModificarCliente.txtApellidos.value = oCliente.apellidos;
            frmModificarCliente.txtDNI.value = sDni;
            frmModificarCliente.txtTelefono.value = oCliente.telefono;
            frmModificarCliente.txtDomicilio.value = oCliente.domicilio;
        }
    }else{
        alert(msgError);
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

        alert(sMensaje);
        if(sMensaje == "Cliente modificado correctamente."){ 
            ocultarFormularios();
        }
    }else{
        alert(msgError);
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

        alert(sMensaje);
        if(sMensaje == "Cliente eliminado correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        alert(msgError);
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

                alert(sMensaje);
                if(sMensaje == "Alquiler realizado con éxito"){
                    ocultarFormularios();   
                }
            }else{
                alert("No existe la vivienda.");
            }
        }else{
            alert("No existe el cliente.");
        }        
    }else{
        alert(msgError);
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
            alert("No se encuentran datos del alquiler.");
        }else{
            document.querySelector("#modificarAlquiler").style.display = "block";
            frmModificarAlquiler.txtId.value = idAlquiler;
            frmModificarAlquiler.txtIdVivienda.value = oAlquiler.idVivienda;
            frmModificarAlquiler.txtDNI.value = oAlquiler.dniCliente;
            frmModificarAlquiler.fechaInicio.value = oAlquiler.fechaInicio;
            frmModificarAlquiler.fechaFin.value = oAlquiler.fechaFin;
        } 
    }else{
        alert(msgError);
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

            alert(sMensaje);
            if(sMensaje == "Alquiler modificado correctamente."){ 
                ocultarFormularios();
            }
        }else{
            alert("No existe el cliente.");
        }

    }else{
        alert(msgError);
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

        alert(sMensaje);
        if(sMensaje == "Alquiler eliminado correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        alert(msgError);
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

        alert(sMensaje);
        if(sMensaje == "Alta vivienda OK"){
            ocultarFormularios();   
        }    
        
    }else{
        alert(msgError);
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
            alert("No se encuentran datos de la vivienda.");
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
        alert(msgError);
    }
      
}
function modificarVivienda() {
    let bValido = true;
    let msgError = "";

    let idVivienda = parseInt(frmModificarVivienda.txtId.value.trim());
    let direccion = frmModificarVivienda.txtDireccion.value.trim();
    let precioAlquiler = parseFloat(frmModificarVivienda.txtPrecio.value.trim());
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
        let sMensaje = oUPOHOME.modificarVivienda(idVivienda, direccion, estadoDisponibilidad, numHabitaciones, descripcion, exterior, climatizacion);

        alert(sMensaje);
        if(sMensaje == "Vivienda modificada correctamente."){ 
            ocultarFormularios();
        }
        
    }else{
        alert(msgError);
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

        alert(sMensaje);
        if(sMensaje == "Vivienda eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        alert(msgError);
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
    let sDniEmpleado = frmAsignarCita.txtDNI.value.trim();
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
    if (!oExpRegDNI.test(sDniEmpleado)) {
        msgError += "\nDNI empleado debe ser un numero.";
        bValido = false;
    }
    if(sFecha == "" || sHora == "" || sDescripcion == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){   
        let oCliente = oUPOHOME.buscarCliente(sDniCliente);
        let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
        if(oCliente != null){
            if(oEmpleado != null){
                let oCita = new Cita(iId, sDniCliente, sDniEmpleado, sFecha, sHora, sDescripcion);
                let sMensaje = oUPOHOME.altaCita(oCita);

                alert(sMensaje);

                ocultarFormularios();   
            }else{
                alert("No existe el empleado.");
            }
        }else{
            alert("No existe el cliente");
        }
        
    }else{
        alert(msgError);
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
            alert("No existe cita con ese ID.");
        }else{
            document.querySelector("#modificarCita").style.display = "block";
            frmModificarCita.txtId.value = sId;
            frmModificarCita.fecha.value = oCita.fecha;
            frmModificarCita.txtHora.value = oCita.hora;
            frmModificarCita.txtDNICliente.value = oCita.dniCliente;
            frmModificarCita.txtDNI.value = oCita.dniEmpleado;
            frmModificarCita.txtDescripcion.value = oCita.descripcion;
        }
    }else{
        alert(msgError);
    }

} 
function modificarCita() {
    let bValido = true;
    let msgError = "";

    let iId = parseInt(frmModificarCita.txtId.value);
    let sFecha = frmModificarCita.fecha.value.trim();
    let sHora = frmModificarCita.txtHora.value.trim();
    let sDniCliente  = frmModificarCita.txtDNICliente.value.trim();
    let sDniEmpleado = frmModificarCita.txtDNI.value.trim();
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
    if (!oExpRegDNI.test(sDniEmpleado)) {
        msgError += "\nDNI empleado debe ser un numero.";
        bValido = false;
    }
    if(sFecha == "" || sHora == "" || sDescripcion == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    } 
    if(bValido){      
            let oCliente = oUPOHOME.buscarCliente(sDniCliente);
            let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
            if(oCliente != null){
                if(oEmpleado != null){
                    let sMensaje = oUPOHOME.modificarCita(iId, sDniCliente, sDniEmpleado, sFecha, sHora, sDescripcion);

                    alert(sMensaje);
                    if(sMensaje == "Cita modificada correctamente."){
                        ocultarFormularios();
                    }
                    
                }else{
                    alert("No existe el empleado.");
                }
            }else{
                alert("No existe el cliente");
            }
            
        
        
    }else{
        alert(msgError);
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

        alert(sMensaje);
        if(sMensaje == "Cita eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        alert(msgError);
    }
}
//-----------------------------------------------------------------------------------------------//
//EMPLEADO
function contratarEmpleado(){
    let bValido = true;
    let msgError = "";
    // Recoger valores del formulario
    let sNombre = frmcontratarEmpleado.txtNombre.value.trim();
    let sApellidos = frmcontratarEmpleado.txtApellidos.value.trim();
    let sDNI = frmcontratarEmpleado.txtDNI.value.trim();
    let iTelf = parseInt(frmcontratarEmpleado.txtTelefono.value);
    let sDomicilio = frmcontratarEmpleado.txtDomicilio.value.trim();
    let fSueldo = parseFloat(frmcontratarEmpleado.txtSueldo.value);

    let oExpRegTelf = /^[0-9]{9}$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    let oExpRegFloat = /^([0-9]*[.])?[0-9]*$/;
    if (!oExpRegTelf.test(iTelf)) {
        msgError += "\nTelefono tiene una longitud de 9 numeros.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDNI)) {
        msgError += "\nDNI debe ser valido";
        bValido = false;
    }
    if (!oExpRegFloat.test(fSueldo)) {
        msgError += "\nSuelo debe ser un numero.";
        bValido = false;
    }

    if(sNombre == "" || sApellidos == "" || sDomicilio == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){
        // Creamos el objeto Cliente
        let oEmpleado = new Empleado(sNombre, sApellidos, sDNI, iTelf, fSueldo,sDomicilio);

        // Alta de Cliente en el UPOHome
        let sMensaje = oUPOHOME.altaEmpleado(oEmpleado);

        alert(sMensaje);

        ocultarFormularios();   
    }else{
        alert(msgError);
    }
}
function cargarEmpleado() {
    let bValido = true;
    let msgError = "";

    let sDni = frmCargarEmpleado.txtDNI.value.trim();
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegDNI.test(sDni)) {
        msgError += "\nDNI debe ser valido";
        bValido = false;
    }
    if(bValido){
        let oEmpleado = oUPOHOME.buscarEmpleado(sDni);
        if(oEmpleado == null){
            alert("No se encuentran datos del Empleado.");
        }else{
            document.querySelector("#modificarEmpleado").style.display = "block";
            frmModificarEmpleado.txtNombre.value = oEmpleado.nombre;
            frmModificarEmpleado.txtApellidos.value = oEmpleado.apellidos;
            frmModificarEmpleado.txtDNI.value = sDni;
            frmModificarEmpleado.txtTelefono.value = oEmpleado.telefono;
            frmModificarEmpleado.txtDomicilio.value = oEmpleado.domicilio;
            frmModificarEmpleado.txtSueldo.value = oEmpleado.salario;
        }
    }else{
        alert(msgError);
    }

} 
function modificarEmpleado() {
    let bValido = true;
    let msgError = "";

    let sNombre = frmModificarEmpleado.txtNombre.value.trim();
    let sApellidos = frmModificarEmpleado.txtApellidos.value.trim();
    let sDNI = frmModificarEmpleado.txtDNI.value.trim();
    let iTelf = parseInt(frmModificarEmpleado.txtTelefono.value);
    let sDomicilio = frmModificarEmpleado.txtDomicilio.value.trim();
    let fSueldo = parseFloat(frmModificarEmpleado.txtSueldo.value);

    let oExpRegTelf = /^[0-9]{9}$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    let oExpRegFloat = /^([0-9]*[.])?[0-9]*$/;
    if (!oExpRegTelf.test(iTelf)) {
        msgError += "\nTelefono tiene una longitud de 9 numeros.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDNI)) {
        msgError += "\nDNI debe ser valido";
        bValido = false;
    }
    if (!oExpRegFloat.test(fSueldo)) {
        msgError += "\nSuelo debe ser un numero.";
        bValido = false;
    }

    if(sNombre == "" || sApellidos == "" || sDomicilio == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){
        let sMensaje = oUPOHOME.modificarEmpleado(sNombre, sApellidos, sDNI, iTelf, fSueldo, sDomicilio);

        alert(sMensaje);
        if(sMensaje == "Empleado modificado correctamente."){ 
            ocultarFormularios();
        }
        
    }else{
        alert(msgError);
    }
} 
function borrarEmpleado () {
    let bValido = true;
    let msgError = "";

    let sDni = frmDespedirEmpleado.txtDNI.value.trim();
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegDNI.test(sDni)) {
        msgError += "\nDNI debe ser valido";
        bValido = false;
    }
    if(bValido){    
        let sMensaje = oUPOHOME.borrarEmpleado(sDni);

        alert(sMensaje);
        if(sMensaje == "Empleado modificado correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        alert(msgError);
    }
}
//-----------------------------------------------------------------------------------------------//
//LIMPIEZA
function asignarLimpieza() {
    let bValido = true;
    let msgError = "";

    let iId = parseInt(frmAsignarLimpieza.txtId.value);
    let sFecha = frmAsignarLimpieza.fecha.value.trim();
    let sHora = frmAsignarLimpieza.txtHora.value.trim();
    let sDniEmpleado = frmAsignarLimpieza.txtDNI.value.trim();
    let idVivienda = parseInt(frmAsignarLimpieza.txtIDVivienda.value);
    let bFinalizado = frmAsignarLimpieza.chkFinalizado.checked;
    
    let oExpRegID = /^[0-9]*$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegID.test(iId)) {
        msgError += "\nID limpieza debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDniEmpleado)) {
        msgError += "\nDNI debe ser valido.";
        bValido = false;
    }
    if (!oExpRegID.test(idVivienda)) {
        msgError += "\nID Vivienda debe ser un numero.";
        bValido = false;
    }
    if(sFecha == "" || sHora == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){ 
            let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
            let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
            if(oVivienda != null){
                if(oEmpleado != null){
                    let oLimpieza = new Limpieza(iId, sDniEmpleado, idVivienda, sFecha, sHora, bFinalizado);
                    let sMensaje = oUPOHOME.añadirLimpieza(oLimpieza);
    
                    alert(sMensaje);
                    if(sMensaje == "Limpieza asignada con exito"){
                        ocultarFormularios();   
                    }    
                   
                }else{
                    alert("No existe el empleado.");
                }
            }else{
                alert("No existe la vivienda");
            }
            
        
        
    }else{
        alert(msgError);
    }
}
function cargarLimpieza() {
    let bValido = true;
    let msgError = "";
    
    let iIdLimpieza = parseInt(frmCargarLimpieza.txtID.value.trim());
    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(iIdLimpieza)) {
        msgError += "\nID limpieza debe ser un numero.";
        bValido = false;
    }
    if(bValido){ 
        let oLimpieza = oUPOHOME.buscarLimpieza(iIdLimpieza);
        if(oLimpieza == null){
            alert("No se encuentran datos de la limpieza.");
        }else{
            document.querySelector("#modificarLimpieza").style.display = "block";
            frmModificarLimpieza.txtId.value = iIdLimpieza;
            frmModificarLimpieza.fecha.value = oLimpieza.fecha;
            frmModificarLimpieza.txtHora.value = oLimpieza.hora;
            frmModificarLimpieza.txtDNI.value = oLimpieza.idEmpleado;
            frmModificarLimpieza.txtIDVivienda.value = oLimpieza.idVivienda
            frmModificarLimpieza.chkFinalizado.checked = oLimpieza.finalizado;
        }   
    }else{
        alert(msgError);
    }

}
function modificarLimpieza() {
    let bValido = true;
    let msgError = "";

    let iId = parseInt(frmModificarLimpieza.txtId.value);
    let sFecha = frmModificarLimpieza.fecha.value.trim();
    let sHora = frmModificarLimpieza.txtHora.value.trim();
    let sDniEmpleado = frmModificarLimpieza.txtDNI.value.trim();
    let idVivienda = frmModificarLimpieza.txtIDVivienda.value.trim();
    let bFinalizado = frmModificarLimpieza.chkFinalizado.checked;

    let oExpRegID = /^[0-9]*$/;
    let oExpRegDNI = /^[0-9]{8}[a-zA-Z]$/;
    if (!oExpRegID.test(iId)) {
        msgError += "\nID limpieza debe ser un numero.";
        bValido = false;
    }
    if (!oExpRegDNI.test(sDniEmpleado)) {
        msgError += "\nDNI debe ser valido.";
        bValido = false;
    }
    if (!oExpRegID.test(idVivienda)) {
        msgError += "\nID Vivienda debe ser un numero.";
        bValido = false;
    }
    if(sFecha == "" || sHora == ""){
        msgError += "\nDebes rellenar todos los campos.";
        bValido = false;
    }
    if(bValido){ 
        
            let oVivienda = oUPOHOME.buscarVivienda(idVivienda);
            let oEmpleado = oUPOHOME.buscarEmpleado(sDniEmpleado);
            if(oVivienda != null){
                if(oEmpleado != null){
                    let sMensaje = oUPOHOME.modificarLimpieza(iId, sDniEmpleado, idVivienda, sFecha, sHora, bFinalizado);

                    alert(sMensaje);
                    if(sMensaje == "Limpieza modificada correctamente."){
                        ocultarFormularios();
                    }
                    
                }else{
                    alert("No existe el empleado.");
                }
            }else{
                alert("No existe la vivienda");
            }
            
        
        
    }else{
        alert(msgError);
    }
}
function borrarLimpieza() {
    let bValido = true;
    let msgError = "";

    let sId = frmEliminarLimpieza.txtID.value.trim();
    let oExpRegID = /^[0-9]*$/;
    if (!oExpRegID.test(sId)) {
        msgError += "\nID limpieza debe ser un numero.";
        bValido = false;
    }
    if(bValido){ 
        
        let sMensaje = oUPOHOME.borrarLimpieza(sId);

        alert(sMensaje);
        if(sMensaje == "Limpieza eliminada correctamente."){
            ocultarFormularios();   
        }
        
    }else{
        alert(msgError);
    }
}

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
    oUPOHOME.arrayVivienas.forEach(vivienda => {
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = vivienda.idVivienda;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = vivienda.direccion;
    });

    document.querySelector("#listados").appendChild(oTabla);
}