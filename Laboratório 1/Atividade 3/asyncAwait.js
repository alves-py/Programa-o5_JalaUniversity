async function simulateApiCall() {
  console.log("Iniciando a chamada à API...");

  // Simulando o atraso da API com setTimeout
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "Dados retornados com sucesso!",
        data: { id: 1, name: "Usuário Teste", email: "teste@exemplo.com" },
      });
    }, 2000); // Simula 2 segundos de espera
  });

  console.log("Resposta da API:", response);
  return response;
}

// Chamando a função
simulateApiCall().then((response) => {
  console.log("Processando a resposta:", response.data);
});
