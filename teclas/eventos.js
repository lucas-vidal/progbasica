var teclas = {UP: 38,  DOWN: 40, LEFT: 37, RIGTH: 39};
document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousemove", dibujarMouseMove);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150; y = 150; color = "black"; movimiento = 1;

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;
}
function dibujarTeclado(eventoTeclado)
{
    console.log(eventoTeclado)
        if (eventoTeclado.keyCode == teclas.UP)
        {
            y = y - movimiento; 
        }    
        if (eventoTeclado.keyCode == teclas.DOWN)
        {
            y = y + movimiento;
        }
        if (eventoTeclado.keyCode == teclas.LEFT)
        {
            x = x - movimiento;
        }
        if (eventoTeclado.keyCode == teclas.RIGTH)
        {
            x = x + movimiento;
        }  
        dibujarLinea(color, x, y, x + movimiento, y + movimiento, papel);
}
function dibujarMouseMove(eventoMouse)
{
    if (eventoMouse.buttons == 1){
    x =  eventoMouse.layerX;
    y =  eventoMouse.layerY;
    dibujarLinea(color, x, y, x + movimiento, y + movimiento, papel);
    }
}
