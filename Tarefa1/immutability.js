// Usando spread operator para manter a imutabilidade
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(originalArray); // [1, 2, 3]
console.log(newArray); // [1, 2, 3, 4]

// Usando Object.assign
const originalObject = { name: "Felipe", age: 30 };
const updatedObject = { ...originalObject, age: 31 };

console.log(originalObject); // { name: 'Felipe', age: 30 }
console.log(updatedObject); // { name: 'Felipe', age: 31 }
