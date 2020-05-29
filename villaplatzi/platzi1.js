var vm = document.getElementById("villaplatzi");
var papel_vm = vm.getContext("2d");

var mapa = {
  url: "tile.png",
  cargaOk: false
};

mapa.imagen  = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);

var cantidad_vacas = aleatorio(1, 5);
var vaca = {
  url: "vaca.png",
  cargaOk: false
};

vaca.imagen  = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

var cantidad_pollos = aleatorio(1, 5);
var pollo = {
  url: "pollo.png",
  cargaOk: false
};

pollo.imagen  = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var cerdo_enX = 400;
var cerdo_enY = 80;
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

cerdo.imagen  = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarMapa()
{
  mapa.cargaOk = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}

  function dibujar()
{
  if(mapa.cargaOk = true)
  {
    papel_vm.drawImage(mapa.imagen, 10, 10);
  }

  if(vaca.cargaOk)
  {
    console.log(cantidad_vacas);
    for (var v = 0; v < cantidad_vacas; v++)
    {
      var vaca_enX = aleatorio(1, 7);
      var vaca_enY = aleatorio(1, 7);
      var vaca_enX = vaca_enX * 40;
      var vaca_enY = vaca_enY * 40;
      papel_vm.drawImage(vaca.imagen, vaca_enX, vaca_enY);
    }
  }

  if(pollo.cargaOk)
  {
    console.log(cantidad_pollos);
    for (var p = 0; p < cantidad_pollos; p++)
    {
      var pollo_enX = aleatorio(0, 4);
      var pollo_enY = aleatorio(0, 4);
      var pollo_enX = pollo_enX * 80;
      var pollo_enY = pollo_enY * 80;
      papel_vm.drawImage(pollo.imagen, pollo_enX, pollo_enY);
    }
  }

  if(cerdo.cargaOk)
  {
    papel_vm.drawImage(cerdo.imagen, cerdo_enX, cerdo_enY);
  }
}

document.addEventListener("keydown", controlCerdo);
var teclas_cerdo = {I_UP: 73, K_DOWN: 75, J_LEFT: 74, L_RIGHT: 76};

function controlCerdo(mueveCerdo)
{
  var movimiento = 5;
  switch(mueveCerdo.keyCode)
  {
    case teclas_cerdo.I_UP:
    dibujar();
    cerdo_enY = cerdo_enY - movimiento;
    break;

    case teclas_cerdo.K_DOWN:
    dibujar();
    cerdo_enY = cerdo_enY + movimiento;
    break;

    case teclas_cerdo.J_LEFT:
    dibujar();
    cerdo_enX = cerdo_enX - movimiento;
    break;

    case teclas_cerdo.L_RIGHT:
    dibujar();
    cerdo_enX = cerdo_enX + movimiento;
    break;
    default:
  }
}

function aleatorio(minimo, maximo)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  return resultado;
}