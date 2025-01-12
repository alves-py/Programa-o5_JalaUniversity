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

// JavaScript Funcional
const array = [1, 2, 3, 4, 5];

// Duplica os valores com map
const doubled = array.map((value) => value * 2);
console.log("Valores duplicados:", doubled);

// Filtra valores maiores que 5
const filtered = doubled.filter((value) => value > 5);
console.log("Valores maiores que 5:", filtered);

// Soma os valores filtrados com reduce
const sum = filtered.reduce((acc, value) => acc + value, 0);
console.log("Soma dos valores filtrados:", sum);

// Função assíncrona que simula uma chamada API
async;
