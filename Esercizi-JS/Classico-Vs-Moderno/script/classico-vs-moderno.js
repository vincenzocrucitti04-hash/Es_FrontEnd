// studenti di esempio
const studenti = [
  { nome: "Mario Rossi", voto: 8, presente: true },
  { nome: "Luigi Bianchi", voto: 5, presente: false },
  { nome: "Anna Verdi", voto: 9, presente: true },
  { nome: "Beatrice Neri", voto: 6, presente: true },
  { nome: "Carlo Blu", voto: 4, presente: true },
  { nome: "Davide Rosa", voto: 7, presente: false },
  { nome: "Elena Gialli", voto: 10, presente: true },
  { nome: "Federico Viola", voto: 3, presente: false },
  { nome: "Giorgia Azzurra", voto: 8, presente: true },
  { nome: "Lorenzo Marrone", voto: 2, presente: false },
  { nome: "Martina Rosa", voto: 6, presente: true },
  { nome: "Simone Nero", voto: 5, presente: true },
];
const btn = document.getElementById("run");
const out = document.getElementById("output");

// funzione per mostrare output
function log(titolo, dato) {
  const h4 = document.createElement("h4");
  const pre = document.createElement("pre");
  h4.textContent = titolo;
  pre.textContent = JSON.stringify(dato, null, 2);
  out.append(h4, pre);
}
btn.addEventListener("click", () => {
  out.innerHTML = ""; // reset output

  //Operatore Ternario

  const primoAlunno = studenti[0];
  const Promosso =
    primoAlunno.voto >= 6 && primoAlunno.presente === true
      ? "Promosso"
      : "Bocciato";
  log("Es n 1", `${primoAlunno.nome} è stato ${Promosso}`);

  //Spread

  const alunniNuovi = [
    { nome: "Vincenzo Crucitti", voto: 8, presente: true },
    { nome: "Arianna De Lucia", voto: 5, presente: false },
  ];
  const tutti = [...studenti, ...alunniNuovi];
  log("Es n 2", tutti);

  //Rest

  function raggruppaNomi(...nomi) {
    return nomi;
  }
  const gruppo1 = raggruppaNomi("Mario", "Luigi", "Anna");
  log("Es n 3 Raggruppa Nomi (con 3 nomi)", gruppo1);

  // Map()

  const arrayTrasformato = tutti.map((el) => `${el.nome}: ${el.voto}`);
  log("Es n 4 Map", arrayTrasformato);

  //Filter()

  const arrayPresenti = tutti.filter((el) => el.presente);
  log("Filtro Alunni Presenti", arrayPresenti);

  //forEach()

  const ul = document.createElement("ul");
  tutti.forEach((presenza) => {
    const li = document.createElement("li");
    const simbolo = presenza.presente ? "✔️" : "❌";
    li.textContent = `${presenza.nome} - ${simbolo}`;
    ul.appendChild(li);
  });
  out.appendChild(ul);

  // Destructuring

  const [...tuttiStudenti] = tutti;
  function presentaStudenti() {
    return tuttiStudenti.map(
      ({ nome, voto, presente }) =>
        `Ciao sono ${nome}, ho preso ${voto} e sono ${
          presente ? "presente" : "assente"
        }`
    );
  }
  log("Es n 7 Presentazione Studenti", presentaStudenti());
});
