<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_GET['VIVIENDA'], true);

$disponibilidad  = 'n';
$climatizacion = 'n';
if($array['estadoDisponibilidad'] == 1){
    $disponibilidad  = 's';
}
if($array['climatizacion'] == 1){
    $climatizacion = 's';
}

$SQL = "INSERT INTO `viviendas`(`idVivienda`, `direccion`, `precioAlquiler`, `estadoDisponibilidad`, `imgPrincipal`, `numHabitaciones`, `descripcion`, `exterior`, `climatizacion`)  VALUES ('".$array['idVivienda']."', '".$array['direccion']."', '".$array['precioAlquiler']."', '".$disponibilidad."', 'img/casa1.jpg', '".$array['numHabitaciones']."', '".$array['descripcion']."', '".$array['exterior']."', '".$climatizacion."')";
$resultado = $conexion->query($SQL);
?>