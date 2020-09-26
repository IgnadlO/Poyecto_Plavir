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
$tipo = $_POST['ropa'];
$colorp = $_POST['cp'];
$colors = $_POST['cs'];
$moda = $_POST['moda'];
$temporada = $_POST['temporada'];
$evento = $_POST['evento'];

$consulta = "INSERT INTO prendas (propietario, tipo, colorp, colors, moda, temporada, evento) VALUES ('".$nombre ."' , '" .$tipo . "','".$colorp ."','".$colors ."','".$moda ."' , '" .$temporada . "','".$evento ."')";


$resultado = mysqli_query($enlace,$consulta);
mysqli_close($enlace);
if($resultado){
    echo '<script language="javascript">alert("La informacion se ha cargado en el servidor correctamente");document.location.href="SubirPrendas.html";
          </script>';
}
else{
    echo '<script language="javascript">alert("No se ha subido su prenda. Por favor, intentelo más tarde.");document.location.href="SubirPrendas.html";
          </script>';
}

?>
