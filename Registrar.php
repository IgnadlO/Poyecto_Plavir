<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "plavir";

$enlace = mysqli_connect($servername, $username,$password, $database);

if ($enlace == false ) {
  die("Fallo la conexion a la base de datos" . $enlace->connect_error);
}
if(isset($_POST["submit"])){
    echo "La informacion se ha cargado en el servidor correctamente";
}
else{
    echo "No se ha subido su prenda. Por favor, intentelo más tarde.";
}

$nombre = $_POST['nombre'];
$contra = $_POST['contra'];
$email = $_POST['email'];
$prov = $_POST['provincia'];

$consulta = "INSERT INTO usuarios (nombre, email, contra, localidad) VALUES ('".$nombre ."' , '" .$email . "','".$contra ."','".$prov ."')";


$resultado = mysqli_query($enlace,$consulta);
mysqli_close($enlace);
if($resultado){
    echo '<script language="javascript">alert("La informacion se ha cargado en el servidor correctamente");document.location.href="MiPlacard.html";
          </script>';
}
else{
    echo '<script language="javascript">alert("No se ha subido su prenda. Por favor, intentelo más tarde.");document.location.href="MiPlacard.html";
          </script>';
}

?>