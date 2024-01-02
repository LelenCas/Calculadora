let resultado = document.getElementById("resultado");

function agregarNumero(numero) {
  resultado.value += numero;
}

function agregarDecimal() {
  // Validación de sólo un decimal
  let valorDecimal = resultado.value.slice(-1);
  if (valorDecimal !== ".") {
    resultado.value += ".";
  }
}

function operacion(operador) {
    //validacion de sólo un operador aritmetico//
    let valorActual = resultado.value.slice(-1);
    if (valorActual !== "+" && valorActual !== "-" && valorActual !== "*" &&  valorActual!== "/") {
      resultado.value += operador;
}
}


function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    if (resultado.value === "error" || resultado.value === null || resultado.value === "undefined") { 
      resultado.value = "Error";
      borrarTodo();
    }
  }
}

function borrarTodo() {
  resultado.value = "";
}

function borrar() {
  let valorActual = resultado.value;
  if (valorActual.length > 0) {
    valorActual = valorActual.slice(0, -1);
    resultado.value = valorActual;
  }
}