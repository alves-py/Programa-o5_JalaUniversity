// Função que recebe outra função como argumento
function applyOperation(arr, operation) {
  return arr.map(operation);
}

// Função usada como callback
function square(num) {
  return num * num;
}

const numbers = [1, 2, 3, 4];
console.log(applyOperation(numbers, square)); // [1, 4, 9, 16]
