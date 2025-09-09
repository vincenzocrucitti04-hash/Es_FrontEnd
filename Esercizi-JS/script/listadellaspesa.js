function addItem() {
  const input = document.getElementById("itemInput"); //trova la casella di testo//
  const itemText = input.value.trim(); //prende il testo inserito e rimuove spazi vuoti//

  if (itemText !== "") {
    //controlla che non sia vuoto//
    const list = document.getElementById("shoppingList"); //trova la lista//
    const li = document.createElement("li"); //crea un nuovo elemento lista//
    li.textContent = itemText; //inserisce il testo nel nuovo elemento//
    list.appendChild(li); //aggiunge l'elemento alla lista//
    input.value = ""; //svuota la casella di testo//
  }
}
