fetch("https://striveschool-api.herokuapp.com/books").then((response) => {
  console.log(response);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Dati richiesti non disponibili");
  }
});
