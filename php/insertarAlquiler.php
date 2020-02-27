<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['ALQUILER'], true);

$SQL = "INSERT INTO `alquileres`(`idAlquiler`, `dniCliente`, `idVivienda`, `fechaInicio`, `fechaFin`) 
VALUES ('".$array['idAlquiler']."', '".$array['dniCliente']."', '".$array['idVivienda']."', '".$array['fechaInicio']."', '".$array['fechaFin']."')";
$resultado = $conexion->query($SQL);
?>