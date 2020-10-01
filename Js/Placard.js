var tprenda = -1, repe = 0;
var prendasDuras = new Array();
var conjunto = new Array();
var prendas;

function cargarData(){
  var usuario = document.getElementById('usuario').value;
  var contra = document.getElementById('contra').value;
  var url = 'bajarPrendas.php';
  $.ajax({
    type:'POST',
    url:url,
    data:{nombre: usuario,
          contra: contra}, 
    success:function(response){
      if(response == 1){
        alert("Su contraseña es incorrecta");
      }else if(response == 2){
        alert("Su usuario es inexistente");
      }else{
        var json = JSON.parse(response);
        prendas = json;
        var cuadro = document.getElementById("cuadroLogin");
        var hijo = cuadro.children;
        cuadro.remove(hijo);
        var capa = document.getElementById("cuadroUsuario");
        var h2 = document.createElement("h2");
        h2.innerHTML = prendas[0].propietario;
        capa.appendChild(h2);
        CambiarTipoRopa();
      }
    }
  });
}

function buscarPrenda(){
    	tropa = document.getElementById('tropa').value;
      tropa = tropa.toLowerCase();
    	colorp = document.getElementById('colorp').value;
      colorp = colorp.toLowerCase();
    	ac = 0;
    	i = 0;
    	while(ac != 1 && i < prendas.length){
    		if(prendas[i].tipo == tropa && prendas[i].colorp == colorp)
    		{
    			ac = 1;
    			document.getElementById("imagenSeleccionada").src= prendas[i].direccion;
    		} else 
    			i ++;
    	}
    	if (ac == 0)
    	alert("No se ha encontrado ningun/a/as "+ tropa +" de color "+ colorp);
    }


function filtroDuro(){
      var x = 0;
      tropa = document.getElementById('tropa').value;
      tmoda = document.getElementById('moda').checked;
      ttemporada = document.getElementById('temporada').value;
      tevento = document.getElementById('evento').value;
      prendasDuras = [];
      for(var i = 0; i < prendas.length; i++){
        if((prendas[i].temporada == ttemporada || prendas[i].temporada == 5
          || (ttemporada <= 2 && prendas[i].temporada == 6 ) || (ttemporada >= 3 && prendas[i].temporada == 7 ))
          && (prendas[i].evento == tevento || prendas[i].evento== 5)
          || (tevento <= 2 && prendas[i].evento == 6 ) || (tevento >= 2 && prendas[i].evento == 7 ))
        {
          prendasDuras[x] = i;
          x++;
        }
      }
      elegirConjunto();
}

function elegirConjunto(){

      ttemperatura = document.getElementById('temperatura').value;
      let mprenda;
      var arrayPrendas = new Array();
      var j = 0, limitePorEstacion;
      var conjuntoNuevo = new Array();

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
          if (prendas[np].tipo == mprenda[i]) {
            arrayPrendas[j] = prendasDuras[x];
            j ++;
          }
        }
        prendaAleatorio = aleatorio(arrayPrendas);
        subirConjunto(prendaAleatorio, mprenda[i]);
        conjuntoNuevo[i] = prendaAleatorio;
        j = 0;
     }
     if(repe >= 5)
      alert("no tiene mas conjuntos posibles");
    else{
      validarRepe(conjuntoNuevo);
    }
    }

function validarRepe(conjuntoNuevo){
  var igual = 0;
     var j = conjuntoNuevo.length;
    for (var i = 0; i <= j - 1; i++){
          if(conjunto[i] == conjuntoNuevo[i]){
            igual ++;
          }
     }
     if(igual == j){
      elegirConjunto();
      repe ++;
     }else{
      for (var i = 0; i <= j; i++) {
        conjunto[i] = conjuntoNuevo[i];
        repe = 0;
      }
      }
}

function filtroBlando(){
    }


function subirConjunto(prenda, mprenda){

      if(mprenda == "buzo" || mprenda == "campera" || mprenda == "abrigo")
        mprenda = "superior";
      if(prenda != null)
        document.getElementById("imagen"+ mprenda).src = prendas[prenda].direccion;
      else
        document.getElementById("imagen"+ mprenda).src = "";
    }



function borrarImagen(){
	document.getElementById("imagenSeleccionada").src="";
}


function CambiarImagen(op) {
	var nprenda = 0;
  let mprenda = ["zapatillas","remera","campera","buzo","pantalon","gorra","lentes"];
  var prendasTipo = new Array();
  var x = 0;
if(op == 1)
{
	nprenda = 8;
}
  prendasTipo = [];
for (var i = prendas.length - 1; i >= 0; i--) {
  if(mprenda[tprenda] == prendas[i].tipo){
    prendasTipo[x] = i;
    x++;
  }
}
for(var i = 0; i < 8; i++){
 document.getElementById("ropa_imagen"+ i).src = ""; 
}
for (var i = 0; i < x; i++) {
  document.getElementById("ropa_imagen"+ i).src = prendas[prendasTipo[nprenda]].direccion;
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

