<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['CITA'], true);

$FechaArray = explode('/', $array['fecha']);
$Fecha = $FechaArray[2]."-".$FechaArray[0]."-".$FechaArray[1];

$SQL = "INSERT INTO `citas`(`idCita`, `dni`, `fecha`, `hora`, `descripcion`) VALUES ('".$array['idCita']."', '".$array['dniCliente']."', '".$Fecha."', '".$array['hora']."', '".$array['descripcion']."')";
$resultado = $conexion->query($SQL);
?>