<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['CLIENTE'], true);

$SQL = "INSERT INTO `clientes`(`dniCliente`, `nombre`, `apellidos`, `telefono`, `domicilio`, `esPropietario`) VALUES ('".$array['dni']."', '".$array['nombre']."', '".$array['apellidos']."', '".$array['telefono']."', '".$array['domicilio']."', 'n')";
$resultado = $conexion->query($SQL);
?>

