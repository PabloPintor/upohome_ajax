<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['ALQUILER'], true);

$SQL = "UPDATE `alquileres` SET `dniCliente`= '".$array['dniCliente']."',`idVivienda`= '".$array['idVivienda']."',`fechaInicio`= '".$array['fechaInicio']."',`fechaFin`= '".$array['fechaFin']."' WHERE `idAlquiler` = '".$array['idAlquiler']."'";
$resultado = $conexion->query($SQL);

?>