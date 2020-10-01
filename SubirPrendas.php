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
$moda = $_POST['moda'];
$temporada = $_POST['temporada'];
$evento = $_POST['evento'];
$nombreImagen = $_FILES['imagen']['name'];
$archivo = $_FILES['imagen']['tmp_name'];
$ruta = "Img";
$carpeta = $ruta."/".$nombre;
$ruta = $ruta."/".$nombre."/".$nombreImagen;
if (!file_exists($carpeta)) {
    mkdir($carpeta, 0777, true);
}
move_uploaded_file($archivo,$ruta);


$consulta = "INSERT INTO prendas (propietario, tipo, colorp, moda, temporada, evento, direccion) VALUES ('".$nombre ."' , '" .$tipo . "','".$colorp ."','".$moda ."' , '" .$temporada . "','".$evento ."','".$ruta ."')";


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
