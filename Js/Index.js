var Jugador1 = prompt("Ingrese el Nombre del Jugador 1...");
var Jugador2 = prompt("Ingrese el Nombre del Jugador 2...");

document.querySelector("#Jugador1").innerHTML = Jugador1;
document.querySelector("#Jugador2").innerHTML = Jugador2;

function cambiarImagen() { //Se hace dentro de la funcion para despues llamarla desde el boton en la pagina

  var NumeroJ1 = Math.random();
  NumeroJ1 = NumeroJ1 * 6;
  NumeroJ1 = Math.floor(NumeroJ1) + 1;

  var NumeroJ2 = Math.random();
  NumeroJ2 = NumeroJ2 * 6;
  NumeroJ2 = Math.floor(NumeroJ2) + 1;

  //Dos Maneras de Cambiar la Imagen por Codigo
  document.querySelector("#Dados1").setAttribute("src", "Images/" + NumeroJ1 + ".png");

  document.getElementById("Dados2").src = "Images/" + NumeroJ2 + ".png";
  //************************************************************************************************

  if (NumeroJ1 > NumeroJ2) {
    document.querySelector("#Ganador").innerHTML = "El Ganador es " + Jugador1;
  } else {
    if (NumeroJ1 < NumeroJ2) {
      document.querySelector("#Ganador").innerHTML = "El Ganador es " + Jugador2;
    } else {
      document.querySelector("#Ganador").innerHTML = "Empate entre " + Jugador1 + " y " + Jugador2;
    }

  }
}
cambiarImagen(); //Se puede Omitir la FUncion y llamarla desde el codigo, pero como se ejecuta con la pagina se coloca
//***********************************************+PRUEBAS***************************************************************
