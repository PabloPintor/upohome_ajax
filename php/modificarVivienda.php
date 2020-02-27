<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['VIVIENDA'], true);

$SQL = "UPDATE viviendas SET direccion= '".$array['direccion']."',precioAlquiler= '".$array['precioAlquiler']."',estadoDisponibilidad= '".$array['estadoDisponibilidad']."',imgPrincipal= '".$array['imgPrincipal']."',numHabitaciones= '".$array['numHabitaciones']."', descripcion= '".$array['descripcion']."',exterior= '".$array['exterior']."', climatizacion= '".$array['climatizacion']."' WHERE idVivienda = '".$array['idVivienda']."'";
$resultado = $conexion->query($SQL);

?>