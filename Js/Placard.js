var tprenda = -1, repe = 0, idSeleccionada = -1, nprenda;
var gtemporada, gevento, gmoda;
var usuario;
var prendasDuras = new Array();
var conjunto = new Array();
var prendas;

function cargarData(){
  usuario = document.getElementById('usuario').value;
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
        h2.innerHTML = usuario;
        capa.appendChild(h2);
        CambiarTipoRopa();
      }
    }
  });
}

function buscarPrenda(){
  if(prendas != null){
    	tropa = document.getElementById('tropa').value;
      tropa = tropa.toLowerCase();
    	colorp = document.getElementById('colorp').value;
      colorp = colorp.toLowerCase();
      validas = new Array();
      var x = 0;
    	ac = 0;

    	for(var i = 0; i < prendas.length; i++){
    		if(prendas[i].tipo == tropa && prendas[i].colorp == colorp)
    		{
    			ac = 1;
    			validas[x] = i;
          x ++;
    		}
    	}

    	if (ac == 0)
    	alert("No se ha encontrado ningun/a/as "+ tropa +" de color "+ colorp);

    ac = 0;
    if(validas.length >= 2){
    for(var i = 0; i < validas.length - 1; i++){
      if(idSeleccionada == validas[i]){
        if(i == validas.length - 1){ 
          subirConjunto(validas[0],tropa);
          idSeleccionada = validas[0];
          ac = 1; 
        }else{
          subirConjunto(validas[i + 1],tropa);
          idSeleccionada = validas[i + 1];
          ac = 1;
        }
     i = validas.length;
    }
    }
    }
    if(ac == 0){
      subirConjunto(validas[0],tropa);
      idSeleccionada = validas[0];
    }
    }else alert("Para utilizar esta funcion debe iniciar sesion");
  }

function filtrar(){
      if(prendas != null){
      tmoda = document.getElementById('moda').checked;
      ttemporada = document.getElementById('temporada').value;
      tevento = document.getElementById('evento').value;

      if(tevento == gevento && ttemporada == gtemporada && tmoda == gmoda) elegirConjunto();
      else {
        gevento = tevento;
        gtemporada = ttemporada;
        gmoda = tmoda;
       filtroDuro(tevento, tmoda, ttemporada);
      }
    }else alert("Para utilizar esta funcion debe iniciar sesion");
}

function filtroDuro(tevento, tmoda, ttemporada){
      var x = 0;
      prendasDuras = [];
      for(var i = 0; i < prendas.length; i++){
        if(( prendas[i].temporada == 3 || (ttemporada <= 2 && prendas[i].temporada == 1 ) || (ttemporada >= 3 && prendas[i].temporada == 2 ))
          && ((prendas[i].evento == tevento) || (tevento <= 2 && prendas[i].evento == 4 ) || (tevento >= 2 && prendas[i].evento == 5 ))) {
          prendasDuras[x] = i;
          x++;
        }
      }
      elegirConjunto();
}

function elegirConjunto(){

      ttemporada = document.getElementById('temporada').value;
      let mprenda;
      var arrayPrendas = new Array();
      var j = 0, limitePorEstacion;
      var conjuntoNuevo = new Array();

      if (ttemporada == 1) 
      {
        limitePorEstacion = 2;
        mprenda = ["zapatillas","remera","pantalon"];
        borrarSuperior();
      }
      else if (ttemporada == 2)
      {
        limitePorEstacion = 3;
        mprenda = ["zapatillas","remera","campera","pantalon"];
      }
      else if(ttemporada == 3)
      {
        limitePorEstacion = 3;
        mprenda = ["zapatillas","remera","buzo","pantalon"];
      }
      else
      {
      limitePorEstacion = 3;
        mprenda = ["zapatillas","remera","abrigo","pantalon"];
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
     if(repe < 2) validarRepe(conjuntoNuevo);
     else repe = 0;
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
      repe ++;
      setTimeout(elegirConjunto(), 1000);
     }else{
      for (var i = 0; i <= j; i++) {
        conjunto[i] = conjuntoNuevo[i];
        repe = 0;
      }
      }
}

function borrarSuperior(){
 document.getElementById("imagensuperior").src = "";
}

function subirConjunto(prenda, mprenda){

      if(mprenda == "buzo" || mprenda == "campera" || mprenda == "abrigo")
        mprenda = "superior";
      if(prenda != null)
        document.getElementById("imagen"+ mprenda).src = prendas[prenda].direccion;
      else
        document.getElementById("imagen"+ mprenda).src = "";
    }

function CambiarImagen(op) {
  let mprenda = ["zapatillas","remera","campera","buzo","pantalon","gorra","lentes"];
  var prendasTipo = new Array();
  var x = 0;
if (op != 1) nprenda = 0;
  prendasTipo = [];
for (var i = prendas.length - 1; i >= 0; i--) {
  if(mprenda[tprenda] == prendas[i].tipo){
    prendasTipo[x] = i;
    x++;
  }
}

if(x <= nprenda) nprenda = 0;
for (var i = 0; i < 8; i++) {
  if ((x >= 1) && nprenda < x){
  document.getElementById("ropa_imagen"+ i).src = prendas[prendasTipo[nprenda]].direccion;
  nprenda ++;
} else document.getElementById("ropa_imagen"+ i).src = ""; 
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

function url() {
  if(usuario != undefined) window.location="SubirPrendas.php?nombre="+usuario;
  else alert("Para subir prendas usted debe iniciar sesion");
}

  function aleatorio(variable){
var aleatorio;
aleatorio = variable[Math.floor(Math.random() * variable.length)];
return aleatorio;
}

