function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { id: 1, name: "Felipe" };
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log("Data received:", data);
}

fetchData(displayData);
// Fetching data...
// Data received: { id: 1, name: 'Felipe' }
