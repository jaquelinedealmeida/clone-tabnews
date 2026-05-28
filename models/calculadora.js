function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os argumentos devem ser números");
  }
  return a + b;
}

function subtrair(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os argumentos devem ser números");
  }
  return a - b;
}

function multiplicar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os argumentos devem ser números");
  }
  return a * b;
}

function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os argumentos devem ser números");
  }
  return a / b;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
