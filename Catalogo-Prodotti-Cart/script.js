// Array prodotti
const productCatalog = [
  { id: 1, name: "Notebook", price: 20 },
  { id: 2, name: "Tablet", price: 10 },
  { id: 3, name: "Smartphone", price: 25 },
];

// Array per il carrello
let cart = [];

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
  // STEP 1: Svuota l'array del carrello
  cart = [];

  // STEP 2: Aggiorna la visualizzazione del carrello
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = "<p>Il carrello è vuoto</p>";

  // STEP 3: Resetta il totale a €0
  document.getElementById("total-amount").textContent = "€0";
}

// Funzione per calcolare il totale
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("total-amount").textContent = `€${total}`;
}
