var tprenda = 0;
var prendasDuras = new Array();


function buscarPrenda(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var objeto = JSON.parse(xhttp.responseText);
    	tropa = document.getElementById('tropa').value;
      tropa = tropa.toLowerCase();
    	colorp = document.getElementById('colorp').value;
      colorp = colorp.toLowerCase();
    	ac = 0;
    	i = 0;
    	while(ac != 1 && i < objeto.prendas.length){
    		if(objeto.prendas[i].tipo == tropa && objeto.prendas[i].colorp == colorp)
    		{
    			ac = 1;
    			document.getElementById("imagenSeleccionada").src= objeto.prendas[i].direccion;
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

function filtroDuro(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(xhttp.responseText);
      var x = 0;
      tropa = document.getElementById('tropa').value;
      tmoda = document.getElementById('moda').checked;
      ttemporada = document.getElementById('temporada').value;
      tevento = document.getElementById('evento').value;
      prendasDuras = [];
      for(var i = 0; i < objeto.prendas.length; i++){
        if(objeto.prendas[i].moda == tmoda 
          && (objeto.prendas[i].temporada == ttemporada || objeto.prendas[i].temporada == 5
          || (ttemporada <= 2 && objeto.prendas[i].temporada == 6 ) || (ttemporada >= 3 && objeto.prendas[i].temporada == 7 ))
          && (objeto.prendas[i].evento == tevento || objeto.prendas[i].evento== 5)
          || (tevento <= 2 && objeto.prendas[i].evento == 6 ) || (tevento >= 2 && objeto.prendas[i].evento == 7 ))
        {
          prendasDuras[x] = i;
          x++;
        } 
      }
      elegirConjunto();
}
};
xhttp.open("GET", "Img/objeto.json", true);
xhttp.send();
}

function elegirConjunto(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(xhttp.responseText);
      ttemperatura = document.getElementById('temperatura').value;
      let mprenda;
      var arrayPrendas = new Array();
      var j = 0, limitePorEstacion;
      var conjunto = new Array();

      if (ttemporada == 1) 
      {
        limitePorEstacion = 2;
        mprenda = ["zapatillas","remera","pantalon"];
      }
      else if (ttemporada == 2)
      {
        limitePorEstacion = 3;
        mprenda = ["zapatillas","remera","campera","pantalon"];
      }
      else
      {
        if(ttemperatura <= 15){
        limitePorEstacion = 4;
        mprenda = ["zapatillas","remera","buzo","abrigo","pantalon"];
      }else
      limitePorEstacion = 3;
        mprenda = ["zapatillas","remera","buzo","pantalon"];
      }

     for (var i = 0; i <= limitePorEstacion; i++) {
      arrayPrendas = [];
        for (var x = 0; x <= prendasDuras.length - 1; x++) {
          np = prendasDuras[x];
          if (objeto.prendas[np].tipo == mprenda[i]) {
            arrayPrendas[j] = prendasDuras[x];
            j ++;
          }
        }
        prendaAleatorio = aleatorio(arrayPrendas);
        subirConjunto(prendaAleatorio, mprenda[i]);
        conjunto[i] = prendaAleatorio;
        j = 0;
     }
    }
  };
xhttp.open("GET", "Img/objeto.json", true);
xhttp.send();
}


function filtroBlando(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(xhttp.responseText);
      for (var i = prendasDuras.length - 1; i >= 0; i--) {

      }
    }
  };
xhttp.open("GET", "Img/objeto.json", true);
xhttp.send();
}

function subirConjunto(prenda, mprenda){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(xhttp.responseText);
      if(mprenda == "buzo" || mprenda == "campera" || mprenda == "abrigo")
        mprenda = "superior";
      if(prenda != null)
        document.getElementById("imagen"+ mprenda).src = objeto.prendas[prenda].direccion;
      else
        document.getElementById("imagen"+ mprenda).src = "";
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

  function aleatorio(variable){
var aleatorio;
aleatorio = variable[Math.floor(Math.random() * variable.length)];
return aleatorio;
}

