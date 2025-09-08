//   //Es N 1 Base//

//   let citta = "Palermo";
//   console.log(citta);

//   //Es N 2 Base//

//   const pi = 3.14;
//   pi = 3.18;

//   //Es N 3 Base//

//   let temperatura = 25;
//   console.log("La temperatura è:", temperatura + " gradi");

//   //Es N 4 Base//

//   let nulla = null

//   //Es N 5 Base//

//   let numero = 42;
//   let parola = "ciao";
//   let flag = false;
//   let nulla = null;
//   let nonDefinito;
//   console.log(numero, parola, flag, nulla, nonDefinito);

//   //Es N 1 Operatori//

//   let somma  = 7 + 5;
//   let sottrazione = 10 - 3;
//   let moltiplicazione = 10 * 6;
//   let divisione = 20 / 4;
//   console.log(somma, sottrazione, moltiplicazione, divisione);

//   //Es n 2 Operatori//

//   let modulo = 17 % 3;

//   //Es n 3 Operatori//

//   let punti = 50;
//   punti += 10;

//   //Es n 4 Operatori//

//   console.log(5 == "5"); Questa operazione ci dirà se 5 numero è uguale a 5 anche se di tipo diverso essendo string
//   console.log(5 === "5"); Questa operazione ci dirà se 5 numero è uguale a 5 stringa
//   console.log(5 != 7); Questa operazione ci dirà se 5 numero è diverso da 7 numero
//   console.log(8 !== "8"); Questa operazione ci dirà se 8 numero è diverso da 8 string

//   //Es n 1 Condizioni//

//   let eta = 20;
//   if(eta >= 18) {
//     console.log("Maggiorenne");
//   } else{
//     console.log("Minorenne");
//   }

//   //Es n 2 Condizioni//
//   let voto = 30;
//   if(voto = 30) {
//     console.log("Ottimo");
//   } if(voto >= 18) {
//     console.log("Buono");
//   } else {
//     console.log("Insufficiente");
//   }

//   //Es n 3 Condizioni//

//   let ora = 9, 15, 21;
//   if(ora < 9) {
//     console.log("Buongiorno");
//   } else if(ora < 15) {
//     console.log("Buon pomeriggio");
//   } else if(ora < 21) {
//     console.log("Buonasera");
//   }

//   // Es n 1 Cicli//

//   for (let i = 1; i <= 20; i++) {
//   console.log(i);
//   }

//   //Es n 2 Cicli//

//   console.log("Numeri pari da 2 a 20:");
//   for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
//   }

//   //Es n 3 Cicli//

//   numero = 10

//   while numero >= 1{
//   console.log(numero);
//   numero -= 1;
//   }

//   //Es n 4 Ciclo//

//   for (let i = 1; i <= 10; i++) {
//     //non ci sono riuscito//

//   //Es n 5 Cicli//

//   let somma = 0;
//   for (let i = 1; i <= 100; i++) {
//   somma += i;
//   }
//   console.log("La somma è: " somma);
//   }

//   //Es n 1 Funzioni//
//   function saluta(nome) {
//     console.log("Ciao, " + nome + "!");
//   }

//   //Es n 2 Funzioni//

//   function somma(a, b) {
//     return a + b;
//     console.log("La somma è: " somma);
//   }

//   //Es n 3 Funzioni//

//   function moltiplicazione(a, b) {
//     return a * b;
//     console.log("La moltiplicazione è: " moltiplicazione);
//   }

//   //Es n 4 Funzioni//

//   function isPari(numero) {
//     return numero % 2 === 0;
//   }

//   //Es n 5 Funzioni//

//   function quadrato(numero) {
//     return numero * numero;
//   }

//   //Es n 6 Funzioni//

//   function presentati(nome, eta)
//   console.log("Ciao, mi chiamo " nome + " e ho " eta);

//   //Es n 1 Array//

//   let frutti = ["mela", "banana", "pera"]
//   console.log(frutti[0]);

//   //Es n 2 Array//

//   frutti.push("kiwi");
//   console.log(frutti[3]);

//   //Es n 3 Array//

//   frutti.pop[];

//   //Es n 4 Array//

//   for (let i = 0; i < frutti.length; i++) {
//     console.log(colori[i]);
//   }

//   //Es n 5 Array//

//   console.log(frutti.length);

//   //Es n 1 Oggetti//

//   let auto = {
//     marca = "Audi",
//     modello = "TT RS",
//     anno = 2018,
//   }

//   //Es n 2 Oggetti//

//   console.log(auto.marca, auto.anno);

//   //Es n 3 Oggetti//

//   console.log("Questa auto è un'" + auto.marca, auto.modello + "del " auto.anno);

//   //Es 1 Interazione Utente//

//   let nome = prompt("Il tuo nome? ");
//   alert("Ciao " + nome);

//   //Es n 2 Interazione Utente//

//   let numero = prompt("Dimmi un numero");
//   alert(numero * numero);

//   //Mini Proettini Flash//

//   //1//

//   let numero1 = prompt("Inserisci il primo numero:");
//   let numero2 = prompt("Inserisci il secondo numero:");
//   let somma = numero1 + numero2;
//   alert("La somma di " + numero1 " e " + numero2 " è " somma);

//   //2//

//   const nomi = [Salvatore, Vincenzo, Arianna];
//   for (let i = 0; i < nomi.length; i++) {
//   console.log("Ciao " + nomi[i] + "!");
//   }

//   //3//
//   const studente = {
//   nome: "Mario",
//   voto: 28
//   }
//   alert(studente.nome + "ha preso " + studente.voto);

//   //4//

//   let parola = prompt ("Scrivi una parola");
//   function maiuscolo(parola) {
//   return parola.toUpperCase();
//   }

//   //5//

//   for (let i = 1; i <= 10; i++) {
//   console.log(i + "² = " + (i * i));
//   }
