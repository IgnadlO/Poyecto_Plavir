var nprenda = 0;

function calcula_resta() {
  let tprenda = ["Zapatillas","Remera","Campera","Pantalon","Gorra","Lentes"];
  nprenda = nprenda + 1;
  document.getElementById("Btprenda").innerHTML = tprenda[nprenda];
  if (nprenda >= 5) {
  	nprenda = -1;
  }
}