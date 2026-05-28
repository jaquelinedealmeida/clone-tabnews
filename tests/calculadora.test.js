const calculadora = require("../models/calculadora");

test("nome do test", () => {
  console.log("Teste rodando...");
});

test *
  ("soma de 2 + 2 deve ser igual a 4",
  () => {
    const resultado = calculadora.somar(2, 2);
    expect(resultado).toBe(4);
  });

test("subtração de 5 - 3 deve ser igual a 2", () => {
  const resultado = calculadora.subtrair(5, 3);
  expect(resultado).toBe(2);
});

test("multiplicação de 4 * 3 deve ser igual a 12", () => {
  const resultado = calculadora.multiplicar(4, 3);
  expect(resultado).toBe(12);
});

test("divisão de 10 / 2 deve ser igual a 5", () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
});
