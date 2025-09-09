function calcola(operazione) {
  // 2. Prende i valori inseriri dall'utente
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  let risultato;

  // 3. Uso SWITCH invece di funzioni separate
  switch (operazione) {
    case "+":
      risultato = n1 + n2;
      break;
    case "-":
      risultato = n1 - n2;
      break;
    case "*":
      risultato = n1 * n2;
      break;
    case "/":
      risultato = n1 / n2;
      break;
  }

  // 4. Mostra il risultato
  document.getElementById("risultato").textContent =
    "Il risultato è: " + risultato;
}
