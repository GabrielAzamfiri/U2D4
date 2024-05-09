/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1, l2) => l1 * l2;
console.log(area(3, 5));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (l1, l2) => {
  if (l1 === l2) {
    somma = (l1 + l2) * 3;
  } else {
    somma = l1 + l2;
  }
  return somma;
};
console.log(crazySum(2, 4));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = (l1) => {
  if (l1 <= 19) {
    diff = Math.abs(l1 - 19);
  } else {
    diff = Math.abs(l1 - 19) * 3;
  }
  return diff;
};
console.log(crazyDiff(22));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = (n) => ((n >= 20 && n <= 100) || n === 400 ? true : false);
console.log(boundary(10));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const epify = (stringa) => (stringa.startsWith("EPICODE") === true ? stringa : (stringa = "EPICODE " + stringa));
console.log(epify("EPICODE SONO un epicoder"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (n) => {
  if (n >= 0) {
    if (n % 3 === 0 || n % 7 === 0) {
      return "il parametro è un multiplo di 3 o 7";
    } else {
      return "il parametro non è un multiplo di 3 o 7";
    }
  } else {
    return "il parametro non è un numero positivo";
  }
};
console.log(check3and7(10));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = (stringa) => stringa.split("").reverse().join("");
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let upperFirst = (stringa) => {
  arrayStringa = stringa.split(" ");

  for (let x = 0; x < arrayStringa.lenght; x++) {
    arrayLettere = arrayStringa[x].split("");
    arrayLettere[0].toUpperCase();
    arrayLettere.join("");
  }
  arrayStringa.join("");
  return arrayStringa;
};
console.log(upperFirst("ciao sono gabriel"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = (stringa) => stringa.substring(1, stringa.length - 1);
console.log(cutString("GabrielAzamfiri"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arrayNumeri = [];
const giveMeRandom = (n) => {
  for (let x = 0; x < n; x++) {
    numero = Math.round(Math.random() * 10);
    arrayNumeri.push(numero);
  }
};
giveMeRandom(9);
console.log(arrayNumeri);
