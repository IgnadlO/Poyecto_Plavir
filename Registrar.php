<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "plavir";

$enlace = mysqli_connect($servername, $username,$password, $database);
if ($enlace == false ) {
  die("Fallo la conexion a la base de datos" . $enlace->connect_error);
}


$nombre = $_POST['nombre'];
$contra = $_POST['contra'];
$email = $_POST['email'];
$fecha = $_POST['cumple'];

$pass = password_hash( $contra, PASSWORD_DEFAULT);

$consulta = "INSERT INTO usuarios (nombre, email, contra, cumple) VALUES ('".$nombre ."' , '" .$email . "','".$pass ."','".$fecha ."')";


$resultado = mysqli_query($enlace,$consulta);
mysqli_close($enlace);
if($resultado){
    echo '<script language="javascript">alert("La informacion se ha cargado en el servidor correctamente");document.location.href="MiPlacard.html";
          </script>';
}
else{
    echo '<script language="javascript">alert("Su nombre de usuario ya existe. Por favor, intente con otro.");document.location.href="Registro.html";
          </script>';
}


?>