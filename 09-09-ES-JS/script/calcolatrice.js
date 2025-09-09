// Operazione Divisione

function sot() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let sot = n1 - n2;

  document.getElementById("risultato").textContent = "Il risultato è: " + sot;
}

// Operazione Somma

function som() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let som = n1 + n2;

  document.getElementById("risultato").textContent = "Il risultato è: " + som;
}

// Operazione Moltiplicazione

function mol() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let mol = n1 * n2;

  document.getElementById("risultato").textContent = "Il risultato è: " + mol;
}

// Operazione Divisione

function div() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let div = n1 / n2;

  document.getElementById("risultato").textContent = "Il risultato è: " + div;
}
