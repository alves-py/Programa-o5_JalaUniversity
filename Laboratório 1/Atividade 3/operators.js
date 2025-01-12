// Operadores ??, ?, && e ||
const value = null;
const defaultValue = "Valor padrão";

// Operador de coalescência nula (??)
const result1 = value ?? defaultValue;
console.log("Coalescência nula:", result1); // "Valor padrão"

// Operador condicional (ternário)
const isEven = 10 % 2 === 0 ? "Par" : "Ímpar";
console.log("Operador ternário:", isEven); // "Par"

// Operador AND (&&)
const isLoggedIn = true;
const message = isLoggedIn && "Bem-vindo!";
console.log("Operador AND:", message); // "Bem-vindo!"

// Operador OR (||)
const username = "";
const displayName = username || "Usuário Anônimo";
console.log("Operador OR:", displayName); // "Usuário Anônimo"
