// Função normal
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // 6

// Função curry
function curryMultiply(a) {
  return function (b) {
    return a * b;
  };
}
const multiplyBy2 = curryMultiply(2);
console.log(multiplyBy2(3)); // 6
console.log(multiplyBy2(5)); // 10
