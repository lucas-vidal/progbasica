var teclas = {
    UP: 38, 
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};


document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;
}


function dibujarTeclado(evento)
{
    var colorcito = "pup";
    var movimiento = 2;
    switch(evento.keyCode)
    {
        case teclas.UP:
            y = y - movimiento; 
        break;  
        case teclas.DOWN:
            y = y + movimiento;
        break;
        case teclas.LEFT:
            x = x - movimiento;
        break;
        case teclas.RIGTH:
            x = x + movimiento;
        break;    
    }
    dibujarLinea(colorcito, x - movimiento, y - movimiento, x , y, papel);
}