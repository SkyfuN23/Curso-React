const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const sumaButton = document.getElementById("suma");
const restaButton = document.getElementById("resta");
const multiplicacionButton = document.getElementById("multiplicacion");
const divisionButton = document.getElementById("division");
const resultadoDiv = document.getElementById("resultado");

sumaButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 + num2;
  resultadoDiv.textContent = "Resultado: " + resultado;
});

restaButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 - num2;
  resultadoDiv.textContent = "Resultado: " + resultado;
});

multiplicacionButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const resultado = num1 * num2;
  resultadoDiv.textContent = "Resultado: " + resultado;
});

divisionButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (num2 !== 0) {
    const resultado = num1 / num2;
    resultadoDiv.textContent = "Resultado: " + resultado;
  } else {
    resultadoDiv.textContent = "Resultado: Error (división por 0)";
  }
});