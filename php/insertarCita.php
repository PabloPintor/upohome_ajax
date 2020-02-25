<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['CITA'], true);

$SQL = "INSERT INTO `citas`(`idCita`, `dni`, `fecha`, `hora`, `descripcion`) VALUES ('".$array['idCita']."', '".$array['dni']."', '".$array['fecha']."', '".$array['hora']."', '".$array['descripcion']."')";
$resultado = $conexion->query($SQL);
?>