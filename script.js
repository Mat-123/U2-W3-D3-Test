// eseguo la richiesta dati al server tramite Fetch

fetch("https://striveschool-api.herokuapp.com/books")
  //tramite .then pongo l'obbligo di attendere fino al corretto caricamento dei dati
  .then((response) => {
    console.log(response);
    if (response.ok) {
      //se il caricamento dati e' avvenuto correttamente procedo tramite JSON a trasformare i dati in oggetti JS
      return response.json();
    } else {
      throw new Error("Dati richiesti non disponibili");
    }
  })
  .then((booklist) => {
    //visiono a schermo i dati ricevuti
    console.log("Booklist: ", booklist);
    //DOM Manipulation, procedo a creare gli elementi HTML con i dati ricevuti
    const bookContainer = document.getElementById("book-cards");

    booklist.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.className = "card my-3 gx-1 col-5 col-md-4 col-lg-3";

      const img = document.createElement("img");

      const imgUrl = book.img;

      img.src = imgUrl;
      img.alt = book.title;

      const divBody = document.createElement("div");
      divBody.className = "card-body";

      const divBodyTitle = document.createElement("h5");
      divBodyTitle.className = "card-title";

      const bookTitle = book.title;

      divBodyTitle.innerText = bookTitle;

      const p = document.createElement("p");
      p.className = "card-text";

      const bookPrice = book.price;

      p.innerText = bookPrice + " BTC";

      const removeButton = document.createElement("a");
      removeButton.href = "#";
      removeButton.className = "btn btn-primary";
      removeButton.innerText = "Rimuovi";

      removeButton.addEventListener("click", () => {
        bookCard.remove();
      });
      divBody.appendChild(divBodyTitle);
      divBody.appendChild(p);
      divBody.appendChild(removeButton);
      bookCard.appendChild(img);
      bookCard.appendChild(divBody);
      bookContainer.appendChild(bookCard);
    });
  })
  //tramite .catch indico cosa fare nel caso in cui i dati non siano stati recuperati dal server
  .catch((error) => console.log(error));
