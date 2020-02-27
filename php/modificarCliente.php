<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$array = json_decode($_POST['CLIENTE'], true);

$SQL = "UPDATE clientes SET nombre= '".$array['nombre']."',apellidos= '".$array['apellidos']."',telefono= '".$array['telefono']."',domicilio= '".$array['domicilio']."',esPropietario= '".$array['esPropietario']."' WHERE dniCliente = '".$array['dniCliente']."'";
$resultado = $conexion->query($SQL);

?>