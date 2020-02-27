<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$id = $_POST['ALQUILER'];

$SQL = "DELETE FROM `alquileres` WHERE `idAlquiler` = '".$id."'";
$resultado = $conexion->query($SQL);
?>