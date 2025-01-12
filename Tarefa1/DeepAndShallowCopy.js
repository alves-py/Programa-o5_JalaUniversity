const obj = {
  name: "Felipe",
  address: { city: "São Paulo", country: "Brazil" },
};

// Shallow copy: apenas copia os valores de nível superficial
const shallowCopy = { ...obj };
shallowCopy.address.city = "Rio de Janeiro";
console.log(obj.address.city); // "Rio de Janeiro" (afetado pela alteração)

// Deep copy: copia todos os níveis de aninhamento
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.address.city = "Curitiba";
console.log(obj.address.city); // "Rio de Janeiro" (não é afetado)
