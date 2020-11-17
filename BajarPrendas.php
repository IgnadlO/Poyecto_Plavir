<?php 

function connectDB(){
$servername = "localhost";
$username = "root";
$password = "";
$database = "plavir";

$enlace = mysqli_connect($servername, $username,$password, $database);

if ($enlace == false ) {
  die("Fallo la conexion a la base de datos" . $enlace->connect_error);
}

return $enlace;
}

function getArraySQL($nombre){

$conexion = connectDB();

$sql = "SELECT * FROM prendas";

mysqli_set_charset($conexion, "utf8"); 
if(!$result = mysqli_query($conexion, $sql)) die();

$rawdata = array(); 
$i=0;

while($row = mysqli_fetch_array($result)) 
{ 
	$propietario=$row['propietario'];
	if ($propietario == $nombre) {
	$tipo=$row['tipo'];
    $colorp=$row['colorp'];
    $moda=$row['moda'];
    $temporada=$row['temporada'];
    $evento=$row['evento'];   
    $direccion=$row['direccion'];

    $rawdata[$i] = array('propietario'=> $propietario,'tipo'=> $tipo, 'colorp'=> $colorp, 'moda'=> $moda, 'temporada'=> $temporada,'evento'=> $evento, 'direccion'=> $direccion);
    $i++;
	}  
}

disconnectDB($conexion);
return $rawdata;
}

function validar($nombre, $contra){
$conexion = connectDB();
$sql = "SELECT * FROM usuarios";
mysqli_set_charset($conexion, "utf8"); 
if(!$result = mysqli_query($conexion, $sql)) die();

while($row = mysqli_fetch_array($result)) 
{ 
    $usuario=$row['nombre'];
    $ct=$row['contra'];
    $verify = password_verify($contra, $ct); 
    if($usuario == $nombre && $verify == true){
        disconnectDB($conexion);
        $myArray = getArraySQL($nombre);
        echo json_encode($myArray);
        return;
    }else if ($usuario == $nombre && $verify == false) {
        echo "1";
        disconnectDB($conexion);
        return;
    }
}
disconnectDB($conexion);
echo "2";
return;
}

 		$nombre = $_POST["nombre"];
        $contra = $_POST["contra"];
        validar($nombre, $contra);

function disconnectDB($conexion){
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  }


//$file = 'clientes.json';
//file_put_contents($file, $json_string);   

?>