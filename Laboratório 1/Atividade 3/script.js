// Botão que exibe um alerta
document.getElementById("alertButton").onclick = () => {
  alert("Você clicou no botão!");
};

// Função para somar números
function sumNumbers(num1, num2) {
  return num1 + num2;
}

// Evento para o botão de somar
document.getElementById("sumButton").onclick = () => {
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;
  const result = sumNumbers(num1, num2);
  document.getElementById("result").innerText = `Resultado: ${result}`;
};
