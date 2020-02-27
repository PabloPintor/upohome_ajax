<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['VIVIENDA'], true);

$disponibilidad  = 'n';
$climatizacion = 'n';
if($array['estadoDisponibilidad'] == 1){
    $disponibilidad  = 's';
}
if($array['climatizacion'] == 1){
    $climatizacion = 's';
}

$SQL = "UPDATE viviendas SET direccion= '".$array['direccion']."',precioAlquiler= '".$array['precioAlquiler']."',estadoDisponibilidad= '".$disponibilidad."',imgPrincipal= '".$array['imgPrincipal']."',numHabitaciones= '".$array['numHabitaciones']."', descripcion= '".$array['descripcion']."',exterior= '".$array['exterior']."', climatizacion= '".$climatizacion."' WHERE idVivienda = '".$array['idVivienda']."'";
$resultado = $conexion->query($SQL);

?>