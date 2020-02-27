<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['CITA'], true);

$SQL = "UPDATE `citas` SET `dni`= '".$array['dni']."',`fecha`= '".$array['fecha']."',`hora`= '".$array['hora']."',`descripcion`= '".$array['descripcion']."' WHERE `idCita` = '".$array['idCita']."'";
$resultado = $conexion->query($SQL);

?>