<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['ALQUILER'], true);


$FechaInicioArray = explode('/', $array['fechaInicio']);
$FechaInicio = $FechaInicioArray[2]."-".$FechaInicioArray[0]."-".$FechaInicioArray[1];
$FechaFinArray = explode('/', $array['fechaFin']);
$FechaFin = $FechaFinArray[2]."-".$FechaFinArray[0]."-".$FechaFinArray[1];


$SQL = "INSERT INTO `alquileres`(`idAlquiler`, `dniCliente`, `idVivienda`, `fechaInicio`, `fechaFin`) 
VALUES ('".$array['idAlquiler']."', '".$array['dniCliente']."', '".$array['idVivienda']."', '".$FechaInicio."', '".$FechaFin."')";
$resultado = $conexion->query($SQL);
?>