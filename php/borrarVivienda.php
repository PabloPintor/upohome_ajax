<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$id = $_GET['id'];

$SQL = "DELETE FROM `viviendas` WHERE `idVivienda` = '".$id."'";
$resultado = $conexion->query($SQL);
?>