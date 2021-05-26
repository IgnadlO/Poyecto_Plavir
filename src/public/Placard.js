var tprenda = -1, repe = 0, idSeleccionada = -1, nprenda;
var gtemporada, gevento, gmoda;
var prendasDuras = new Array();
var conjunto = new Array();
var prendas = [];

//funciones flecha
const aleatorio = (variable) => Math.floor(Math.random() * variable.length);
//if(document.getElementById('cuadroLogin') == undefined) cargarData(false);

if (getCookie('NombreUsuario') != false)
    cargarData(false);
  
function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
      return c.substring(name.length, c.length);
  }
  return false;
}

//descarga el JSON con las prendas
function cargarData(hacerSingIn){
  if (hacerSingIn){
  var usuario = document.getElementById('usuario').value;
  let contra = document.getElementById('contra').value;
  var datosAjax = {
    nombre: usuario,
    contra: contra
  };
  } 
  else {
  var usuario = getCookie('NombreUsuario');
  var datosAjax = {nombre: usuario};
  }
  var url = '/singIn';
  $.ajax({
    type:'POST',
    dataType : 'json',
    url:url,
    data: datosAjax, 
    success:function(response){
      if(response == '1'){
        alert("La contraseña es incorrecta");
      } else if(response == '2'){
        alert("Usuario inexistente");
      } else {
        prendas = (response.length == 0)? null: response;
        let cuadro = document.getElementById("cuadroUsuario");
        let hijo = cuadro.firstElementChild;
        console.log(hijo.innerHTML);
        cuadro.removeChild(hijo);
        // let h2 = document.createElement("h2");
        // h2.innerHTML = usuario;
        // cuadro.appendChild(h2);
        if(prendas != null) CambiarTipoRopa();
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

      mprenda = ["remera","pantalon","zapatillas"];

      if (ttemporada == 1) borrarImagen("superior");
      else if (ttemporada == 2) mprenda = ["campera","remera","pantalon","zapatillas"];
      else if(ttemporada == 3) mprenda = ["buzo","remera","pantalon","zapatillas"];
      else mprenda = ["abrigo","remera","pantalon","zapatillas"];

     for (var i = 0; i <= mprenda.length - 1; i++) {
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

function borrarImagen(mprenda){
  if(document.getElementById("imagen"+mprenda)){
        imagen = document.getElementById("imagen"+mprenda);
        padre = imagen.parentNode;
        padre.removeChild(imagen);
      }
}

function subirConjunto(prenda, mprenda){

      if(mprenda == "buzo" || mprenda == "campera" || mprenda == "abrigo")
        mprenda = "superior";
      if(prenda != null){
        var lista = document.getElementById("sropa");
        borrarImagen(mprenda);
        lista.insertAdjacentHTML("beforeend",'<img src="'+ prendas[prenda].direccion +'" width="235px" height="235px" alt="" class="ropa_imagen_select" id="imagen'+ mprenda +'" />');
      }
      else borrarImagen(mprenda);
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
  document.getElementById("ropa_imagen"+ i).innerHTML='<img src="'+ prendas[prendasTipo[nprenda]].direccion +'" alt="" class="ropa_imagen" />';
  nprenda ++;
} else document.getElementById("ropa_imagen"+ i).innerHTML=""; 
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
//226 lineas de codigo