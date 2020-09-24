<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "usuario";

$enlace = mysqli_connect($servername, $username,$password, $database);

if ($enlace == false ) {
  die("Fallo la conexion a la base de datos" . $enlace->connect_error);
}
if(isset($_POST["submit"])){
    
}
else{
    echo "No ha de Funcionar el servidor. Muchas Gracias e intentelo más tarde Gordo pelotudo.";
}
$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$contrasenia = $_POST['contrasenia'];
$cumpleanios = $_POST['cumpleanios'];
$placard = $_POST['placard'];

$consulta = "INSERT INTO usuarios (nombre, mail, contrasenia, cumplenias, placard) VALUES (CURRENT_DATE(), '".$nombre ."' , '" .$mail . "','".$contrasenia ."','".$cumpleanios ."','".$placard ."' )";

//$jason = '{ "prendas": [
         {
            "direccion" : "Img/remera0.png",
            "tipo" : "remera",
            "colorp" : "blanco",
            "colors" : "rojo",
            "moda" : true,
            "temporada" : 1,
            "evento" : 1
        }]}'

function getArraySQL($sql){
    $conexion = connectDB();

        mysqli_set_charset($conexion, "utf8"); 

    if(!$result = mysqli_query($conexion, $sql)) die(); 

    $rawdata = array(); 

    $i=0;

    while($row = mysqli_fetch_array($result))
    {
        $rawdata[$i] = $row;
        $i++;
    }

    disconnectDB($conexion); 

    return $rawdata; 
}

        $myArray = getArraySQL($sql);
        echo json_encode($myArray);

$resultado = mysqli_query($enlace,$consulta);
mysqli_close($enlace);
if($resultado){
    echo '<script language="javascript">alert("mensaje enviado");document.location.href="index.html";
          </script>';
}
else{
    echo '<script language="javascript">alert("No se pudo enviar el mensaje");document.location.href="index.html";
          </script>';
}


?>
