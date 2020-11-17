<html>	
<head>
<meta charset="utf-8" /> 
<title>Subir Prendas</title>
<link rel="stylesheet" type="text/css" href="Css/EstiloSubir.css">
</head>	
<body>
	<header class="header">
		<h1 class="logo">Subir Prendas</h1>
		<div class="cabeza">	
			<span class="icon-menu"></span>
			<nav class="nav">
			<ul class="menu">
				<li class="menu__item"><a class="menu__link" href="Index.html">Inicio</a></li>
				<li class="menu__item"><a class="menu__link" href="MiPlacard.html">MiPlacard</a></li>
			</ul>
			</nav>
				<div id="cuadroUsuario">
					<?php
					echo "<h2>";
					echo $_REQUEST['nombre'];
					echo "</h2>";
					?>
				</div>
		</div>
</header>


<div id="gran_contenedor">
<form method="POST" id="Formulario" action="CargarPrendas.php" enctype="multipart/form-data">

<h1>Imagen</h1>
<div class="contenedor">
	<div id="cuadroImagen">
		
	</div>
<div id="contenedor_imagen">
	<input type="file" name="imagen" id="imagen" multiple>
	<a id="texto_imagen">Elegir Imagen </a>
</div>
</div>

<h1>Caracteristicas</h1>
	<div class="contenedor">
		<div class="Ingreso">		
		<label>Tipo de Prenda: <select class="input" name="ropa" id="ropa">
			<option value="remera">Remera</option>
			<option value="pantalon">Pantalon</option>
			<option value="zapatillas">Zapatillas</option>
			<option value="buzo">Buzo</option>
			<option value="campera">Campera</option>
			<option value="abrigo">Abrigo</option>
			<option value="lentes">Lentes</option>
			<option value="gorro">Gorro</option></select></label>
		</div>
		<div class="Ingreso">
		<label>Color Principal:<input type="text" id="cp" name="cp" size="30" class="input" required=""></label>
		</div>
		<div class="Ingreso">
		<label>Esta a la Moda? <input type="checkbox" id="moda" name="moda" checked></label>
		</div>
		<div class="Ingreso">
		<label>Estacion: <select class="input" name="temporada" id="temporada"><option value="1">Verano/Primavera</option><option value="2">Invierno/Otoño</option><option value="3">Indistinto</option></select></label>
		</div>
		<div class="Ingreso">
		<label>Evento: <select class="input" name="evento" id="evento">
			<option value="1">Casual</option>
			<option value="2">Informal</option>
			<option value="3">Formal</option>
			<option value="4">Casual/Semiformal</option>
			<option value="5">Semiformal/Formal</option></select></label>
		</div>
		<div class="Ingreso">
		<?php
			echo "<label>Propietario:<input type=text id=nombre name=nombre value=".$_REQUEST['nombre'].">";
			echo "</label>";
		?>
		</div>
		</br>
		<input type="submit" value="Subir" class="Boton" ><br/>
	</div>
</form>
</div>
<script type="text/javascript">
	document.getElementById("imagen").onchange = function(e) {
  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = function(){
    let preview = document.getElementById('cuadroImagen'),
            image = document.createElement('img');

    image.src = reader.result;
    image.id = "previsualizar";

    preview.innerHTML = '';
    preview.append(image);
  };
}
</script>
</body>	
</html>
