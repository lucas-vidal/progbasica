var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

fondo.imagen  = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen  = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen  = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen  = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
function dibujar()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    
    var cantidadvaca = aleatorio(1 , 20)
    for(var v=0; v<cantidadvaca; v++)
    {
        if (vaca.cargaOK)
        {
            var x = aleatorio(0 , 420);
            var y = aleatorio(0 , 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    var cantidadpollo = aleatorio(1 , 20)
    for(var p=0; p<cantidadpollo; p++)
    {
        if (pollo.cargaOK)
        {
            var x = aleatorio(0 , 420);
            var y = aleatorio(0 , 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if (cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, xc, yc);
    }
}



function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

var teclas = {UP: 38,  DOWN: 40, LEFT: 37, RIGTH: 39};
document.addEventListener("keydown", dibujarTeclado);
papel.drawImage(cerdo.imagen, xc, yc);
var movimiento = 2;
var xc = 170;
var yc = 170;

function dibujarTeclado(eventoTeclado)
{
        if (eventoTeclado.keyCode == teclas.UP)
        {
            yc = yc - movimiento; 
            dibujar();
        }    
        if (eventoTeclado.keyCode == teclas.DOWN)
        {
            yc = yc + movimiento;
            dibujar();
        }
        if (eventoTeclado.keyCode == teclas.LEFT)
        {
            xc = xc - movimiento;
            dibujar();
        }
        if (eventoTeclado.keyCode == teclas.RIGTH)
        {
            xc = xc + movimiento;
            dibujar();
        }
}


