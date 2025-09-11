// Array prodotti
const productCatalog = [
  { id: 1, name: "Notebook", price: 20 },
  { id: 2, name: "Tablet", price: 10 },
  { id: 3, name: "Smartphone", price: 25 },
];

let cart = [];

// FUNZIONE PER CREARE I PRODOTTI DINAMICAMENTE
function createProductCatalog() {
  const container = document.getElementById("products-container");

  // Svuota il container (nel caso ci fosse già qualcosa)
  container.innerHTML = "";

  // Crea ogni prodotto dall'array
  productCatalog.forEach((product) => {
    // Crea il div principale del prodotto
    const productDiv = document.createElement("div");
    productDiv.className = `product${product.id}`; // Classe: product1, product2, etc.
    productDiv.setAttribute("data-id", product.id); // Attributo data-id

    // Crea il contenuto HTML del prodotto
    productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Prezzo: €${product.price}</p>
            <button class="quantita${product.id}" onclick="addItem(${product.id})">
                Aggiungi al carrello
            </button>
        `;

    // Aggiungi il prodotto al container
    container.appendChild(productDiv);
  });
}

// Quando il DOM è pronto, chiama createProductCatalog()
document.addEventListener("DOMContentLoaded", function () {
  createProductCatalog();
});

// Funzione per aggiungere al carrello
function addItem(productId) {
  // Trova il prodotto nell'array
  const product = productCatalog.find((p) => p.id === productId);

  // Aggiungi al carrello
  cart.push(product);

  // Aggiorna la visualizzazione
  updateCart();
  updateTotal();
}

// Funzione per aggiornare il carrello
function updateCart() {
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = ""; // Svuota

  cart.forEach((item) => {
    cartDiv.innerHTML += `<p>${item.name} - €${item.price}</p>`;
  });
}

// Funzione per svuotare il carrello
function clearCart() {
  // Svuota l'array del carrello
  cart = [];

  // Aggiorna la visualizzazione del carrello
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = "<p>Il carrello è vuoto</p>";

  // Resetta il totale a €0
  document.getElementById("total-amount").textContent = "€0";
}

// Funzione per calcolare il totale
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("total-amount").textContent = `€${total}`;
}

// Funzione per il checkout con controllo carrello vuoto
function checkout() {
  // Controlla se il carrello è vuoto
  if (cart.length === 0) {
    // Se vuoto, mostra alert di errore
    alert("Il carrello è vuoto! Aggiungi qualche prodotto prima di procedere.");
    return; // Ferma la funzione qui
  }

  // STEP 2: Se il carrello ha prodotti, procedi
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Grazie per l'acquisto! Totale: €${total}`);

  // Opzionale: svuota il carrello dopo l'acquisto
  clearCart();
}
