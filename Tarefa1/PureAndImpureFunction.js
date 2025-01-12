// Função pura: sempre retorna o mesmo resultado para os mesmos argumentos e não tem efeitos colaterais
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Função impura: depende de variáveis externas ou tem efeitos colaterais
let counter = 0;
function incrementCounter() {
  counter++;
  return counter;
}
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
