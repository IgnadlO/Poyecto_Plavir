var tprenda = 0;

function seleccionarPrenda(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var objeto = JSON.parse(xhttp.responseText);
    	tropa = document.getElementById('tropa').value;
    	colorp = document.getElementById('colorp').value;
    	ac = 0;
    	i = 0;
    	while(ac != 1 && i < objeto.prendas.length){
    		if(objeto.prendas[i].tipo == tropa)
    		{
    		if(objeto.prendas[i].colorp == colorp)
    		{
    			ac = 1;
    			document.getElementById("imagenSeleccionada").src= objeto.prendas[i].direccion;
    		} else
    			i ++;
    		} else 
    			i ++;
    	}
    	if (ac == 0)
    	alert("No se ha encontrado ningun/a/as "+ tropa +" de color "+ colorp);
    }
};
xhttp.open("GET", "Img/objeto.json", true);
xhttp.send();
}

function borrarImagen(){
	document.getElementById("imagenSeleccionada").src="";
}


function CambiarImagen(op) {
	var nprenda = 0;
if(op == 1)
{
	nprenda = 8;
}
for (var i = 0; i < 8; i++) {
switch(tprenda){
case 0: document.getElementById("ropa_imagen"+ i).src="Img/zapatillas"+nprenda+".png"; break;
case 1: document.getElementById("ropa_imagen"+ i).src="Img/remera"+nprenda+".png"; break;
case 2: document.getElementById("ropa_imagen"+ i).src="Img/buzo"+nprenda+".png"; break;
case 3: document.getElementById("ropa_imagen"+ i).src="Img/campera"+nprenda+".png"; break;
case 4: document.getElementById("ropa_imagen"+ i).src="Img/pantalon"+nprenda+".png"; break;
case 5: document.getElementById("ropa_imagen"+ i).src="Img/gorra"+nprenda+".png"; break;
case 6: document.getElementById("ropa_imagen"+ i).src="Img/lentes"+nprenda+".png"; break;
}
nprenda ++;
}
}

function CambiarTipoRopa() {
  let mprenda = ["Zapatillas","Remeras","Camperas","Buzos","Pantalones","Gorras","Lentes"];
  tprenda = tprenda + 1;
  document.getElementById("Btprenda").innerHTML = mprenda[tprenda];
  CambiarImagen();
  if (tprenda >= 6) {
  	tprenda = -1;
  }
  }
