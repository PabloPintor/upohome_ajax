<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$id = $_GET['DNI'];

$SQL = "DELETE FROM `clientes` WHERE `dniCliente` = '".$id."'";
$resultado = $conexion->query($SQL);
?>