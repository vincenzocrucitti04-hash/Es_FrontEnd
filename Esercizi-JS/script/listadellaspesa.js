let shoppingItems = []; // Inizialmente vuoto

function generateId() {
  // Funzione per creare un ID casuale
  return Math.random().toString(36).substr(2, 9); // Genera stringa casuale di 9 caratteri
}

function addItem() {
  // Funzione per aggiungere un elemento

  const inputProdotto = document.getElementById("prodotto"); // Trovo il campo prodotto
  const inputQuantita = document.getElementById("quantita"); // Trovo il campo quantità
  let inputCategoria = document.getElementById("categoria"); // Trovo il campo categoria

  const prodotto = inputProdotto.value.trim(); // Prendo il valore del prodotto
  const quantita = inputQuantita.value.trim(); // Prendo il valore della quantità
  let categoria = inputCategoria.value.trim(); // Prendo il valore della categoria

  if (prodotto !== "" && quantita !== "" && categoria !== "") {
    // Se entrambi i campi sono pieni

    // Creo un nuovo oggetto con i dati
    const newItem = {
      id: generateId(), // ID casuale univoco
      prodotto: prodotto, // Nome del prodotto
      quantita: quantita, // Quantità del prodotto
      categoria: categoria, // Categoria del prodotto
      completed: false, // Stato completamento iniziale
    };

    shoppingItems.push(newItem); // Aggiungo l'oggetto all'array

    renderList(); // Aggiorno la visualizzazione della lista

    inputProdotto.value = ""; // Svuoto il campo prodotto
    inputQuantita.value = ""; // Svuoto il campo quantità
    inputCategoria.value = ""; // Svuoto il campo categoria

    console.log("Array aggiornato:", shoppingItems); // Mostro l'array nella console
  }
}

function removeItem(id) {
  // Funzione per rimuovere un elemento tramite ID
  shoppingItems = shoppingItems.filter((item) => item.id !== id); // Rimuovo l'oggetto con quell'ID dall'array
  renderList(); // Aggiorno la visualizzazione
  console.log("Elemento rimosso. Array aggiornato:", shoppingItems); // Mostro l'array aggiornato
}

function toggleCompleted(id, checkbox) {
  // Funzione per gestire il click sulla checkbox
  const item = shoppingItems.find((item) => item.id === id); // Trovo l'oggetto nell'array

  if (item) {
    // Se esiste l'oggetto
    item.completed = checkbox.checked; // Aggiorno lo stato completato nell'oggetto
    renderList(); // Ridisegno la lista per applicare lo stile
    console.log("Stato aggiornato:", item); // Mostro l'oggetto aggiornato nella console
  }
}

function renderList() {
  // Funzione per mostrare tutti gli elementi dell'array nell'HTML
  const list = document.getElementById("shoppingList"); // Trovo la lista HTML
  list.innerHTML = ""; // Svuoto completamente la lista

  // Per ogni oggetto nell'array, creo un elemento HTML
  shoppingItems.forEach((item) => {
    const li = document.createElement("li"); // Creo un nuovo <li>

    // Inserisco nell'<li> i dati dell'oggetto con checkbox
    li.innerHTML = `
            <input type="checkbox" 
                   id="checkbox-${item.id}" 
                   onchange="toggleCompleted('${item.id}', this)"
                   ${item.completed ? "checked" : ""}>
            <span style="${
              item.completed
                ? "text-decoration: line-through; opacity: 0.6;"
                : ""
            }">
                <strong>${item.prodotto}</strong> - Quantità: ${
      item.quantita
    } - Categoria: ${item.categoria}
            </span>
            <small style="color: gray;"> (ID: ${item.id})</small>
            <button onclick="removeItem('${item.id}')">Rimuovi</button>
        `;

    list.appendChild(li); // Aggiungo l'<li> alla lista
  });
}
