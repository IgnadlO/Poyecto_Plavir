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
    $colors=$row['colors'];
    $moda=$row['moda'];
    $temporada=$row['temporada'];
    $evento=$row['evento'];   

    $rawdata[$i] = array('propietario'=> $propietario,'tipo'=> $tipo, 'colorp'=> $colorp,'colors'=> $colors, 'moda'=> $moda, 'temporada'=> $temporada,'evento'=> $evento);
    $i++;
	}  
}
disconnectDB($conexion);
return $rawdata;
}


 		$nombre = $_POST["nombre"];
		$myArray = getArraySQL($nombre);
        echo json_encode($myArray);

function disconnectDB($conexion){
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  }


//$file = 'clientes.json';
//file_put_contents($file, $json_string);   

?>