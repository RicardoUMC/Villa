var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var vacasX = [];
var vacasY = [];
var vXDesorden = [];
var vYDesorden = [];
var pollosX = [];
var pollosY = [];
var pXDesorden = [];
var pYDesorden = [];

class Animal
{
  constructor(cantidad)
  {
    this.cantidad = cantidad;
    this.posiciones();
    this.desorden();
  }
  posiciones()
  {
    for (var i = 0; i < this.cantidad; i++)
    {
      vacasX[i] = aleatorio(0, 6);
    }
    for (var i = 0; i < this.cantidad; i++)
    {
      vacasY[i] = aleatorio(0, 6);
    }
    for (var i = 0; i < this.cantidad; i++)
    {
      pollosX[i] = aleatorio(0, 6);
    }
    for (var i = 0; i < this.cantidad; i++)
    {
      pollosY[i] = aleatorio(0, 6);
    }
    return (vacasX[i], vacasY[i], pollosX[i], pollosY[i]);
  }
  desorden()
  {
    for (var i = 0; i < this.cantidad; i++)
    {
      vXDesorden[i] = aleatorio(5, 80);
    }
    for (var i = 0; i < this.cantidad; i++)
    {
      vYDesorden[i] = aleatorio(5, 80);
    }
    for (var i = 0; i < this.cantidad; i++)
    {
      pXDesorden[i] = aleatorio(5, 80);
    }
    for (var i = 0; i < this.cantidad; i++)
    {
      pYDesorden[i] = aleatorio(5, 80);
    }
    return (vXDesorden[i], vYDesorden[i], pXDesorden[i], pYDesorden[i]);
  }
}

var propiedades = [];
propiedades.push( new Animal(aleatorio( 0, 10)) );
propiedades.push( new Animal(aleatorio( 0, 10)) );

var cerdoX = 0;
var cerdoY = 0;

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

console.log("Vacas: " + propiedades[0].cantidad);
console.log("Pollos: " + propiedades[1].cantidad);

function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK && pollo.cargaOK)
  {
    for (var i = 0; i < propiedades[0].cantidad; i++)
    {
      var vX = vacasX[i];
      var vY = vacasY[i];
      vX = vX * 60 + vXDesorden[i];
      vY = vY * 60 + vYDesorden[i];
      papel.drawImage(vaca.imagen, vX , vY );
    }
    for (var i = 0; i < propiedades[1].cantidad; i++)
    {
      var pX = pollosX[i];
      var pY = pollosY[i];
      pX = pX * 60 + pXDesorden[i];
      pY = pY * 60 + pYDesorden[i];
      papel.drawImage(pollo.imagen, pX , pY );
    }
  }
  if (fondo.cargaOK && vaca.cargaOK && pollo.cargaOK && cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, cerdoX, cerdoY);
  }
}

document.addEventListener("keydown", moverCerdo);
function moverCerdo(evento)
{
  var movimiento = 40;
  switch (evento.keyCode)
  {
    case teclas.UP:
      if (cerdoY > 0)
      {
        cerdoY = cerdoY - movimiento;
        dibujar();
      }
      else if ( cerdoY <= 0 && cerdoY >= -10 )
      {
        cerdoY = cerdoY - 20;
        dibujar();
      }
    break;
    case teclas.DOWN:
      if (cerdoY < 400)
      {
        cerdoY = cerdoY + movimiento;
        dibujar();
      }
      else if ( cerdoY >= 400 && cerdoY <= 430 )
      {
        cerdoY = cerdoY + 20;
        dibujar();
      }
    break;
    case teclas.LEFT:
      if (cerdoX > 0)
      {
        cerdoX = cerdoX - movimiento;
        dibujar();
      }
      else if ( cerdoX <= 0 && cerdoX >= -5 )
      {
        cerdoX = cerdoX - 10;
        dibujar();
      }
    break;
    case teclas.RIGHT:
      if (cerdoX < 400)
      {
        cerdoX = cerdoX + movimiento;
        dibujar();
      }
      else if ( cerdoX >= 400 && cerdoX <= 420 )
      {
        cerdoX = cerdoX + 30;
        dibujar();
      }
    break;
    default:
    console.log("Oie no");
  }
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
