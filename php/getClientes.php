<?php
$conexion = mysqli_connect("localhost","root","","upohome");
$conexion->set_charset("utf8");

$SQL = "SELECT * FROM clientes";
$resultado = $conexion->query($SQL);
$datos = [];
while($row = $resultado -> fetch_assoc()){ //fetch_array
    $datos[] = $row;
}
echo json_encode($datos);
?>