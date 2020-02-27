<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$id = $_POST['CITA'];

$SQL = "DELETE FROM `citas` WHERE `idCita` = '".$id."'";
$resultado = $conexion->query($SQL);
?>