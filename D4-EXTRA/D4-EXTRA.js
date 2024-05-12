// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const arrNumeri = [];
const giveMeRandom = () => {
  //funzione che mi da 10 numeri random (da 0 a 10) e li salva in un array
  for (i = 0; i < 10; i++) {
    arrNumeri.push(Math.round(Math.random() * 10));
  }
};

const checkArray = () => {
  let somma = 0;

  for (i = 0; i < arrNumeri.length; i++) {
    if (arrNumeri[i] > 5) {
      console.log(arrNumeri[i], "è maggiore di 5");
      somma += arrNumeri[i];
    } else {
      console.log(arrNumeri[i], "non è maggiore di 5");
    }
  }
  return somma;
};

console.log("La somma dei > 5 è:", checkArray(giveMeRandom()));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    name: "cuffie",
    id: "sadeasaa",
    price: 100,
    quantity: 2,
  },
  {
    name: "telefono",
    id: "sadeasaa",
    price: 650,
    quantity: 1,
  },
  {
    name: "monitor",
    id: "sadeasaa",
    price: 250,
    quantity: 1,
  },
];
const shoppingCartTotal = () => {
  let totale = 0;
  for (i = 0; i < shoppingCart.length; i++) {
    totale += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return totale;
};
console.log("il totale del saldo è: $", shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const mouse = {
  name: "mouse",
  id: "sadeasaa",
  price: 160,
  quantity: 3,
};
const addToShoppingCart = (x) => {
  shoppingCart.push(x);
  return shoppingCartTotal();
};
console.log("il nuovo saldo totale è:", addToShoppingCart(mouse));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = () => {
  let oggCostoso = 0;
  let nomeProdotto;
  for (i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > oggCostoso) {
      oggCostoso = shoppingCart[i].price;
      nomeProdotto = shoppingCart[i].name;
    }
  }
  return oggCostoso;
};
console.log("Il prezzo dell'oggetto più costoso è:", maxShoppingCart());
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = () => shoppingCart[shoppingCart.length - 1];
console.log(latestShoppingCart());
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = (x) => {
  let ripetizioni = 0;
  while (ripetizioni < 3) {
    let y = Math.round(Math.random() * 9);
    if (y <= x) {
      console.log(y);
    } else {
      console.log(y, "è maggiore di", x);
      ripetizioni++;
    }
  }
};
loopUntil(7);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const arrCasuale = [4, 7, 3, "a", 6];
const average = (arrCasuale) => {
  let somma = 0;
  let totNumeri = 0;
  let media;
  for (let index = 0; index < arrCasuale.length; index++) {
    if (typeof arrCasuale[index] === "number") {
      somma += arrCasuale[index];
      totNumeri++;
      media = somma / totNumeri;
    }
  }
  return media;
};
console.log("la media dei numeri è:", average(arrCasuale));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arrStringhe = ["adsafasfasd", "abc", "abcdef", "abcdefghijklmn"];
const longest = (arrStringhe) => {
  let numLettere = 0;
  let stringaaa;
  for (i = 0; i < arrStringhe.length; i++) {
    if (numLettere < arrStringhe[i].length) {
      numLettere = arrStringhe[i].length;
      stringaaa = arrStringhe[i];
    }
  }
  return stringaaa;
};
console.log("la stringa piu lunga è:", longest(arrStringhe));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const emailContent = "Questa è una mail ordinaria spam";

const antiSpam = (emailContent) => {
  let parole = emailContent.split(" ");
  let mailSpam;
  for (i = 0; i < parole.length; i++) {
    parole[i].toUpperCase() === "SPAM" || parole[i].toUpperCase() === "SCAM" ? (mailSpam = true) : (mailSpam = false);
  }
  return mailSpam;
};

console.log(antiSpam(emailContent));
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const time = new Date(100000000000);
console.log(time);
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
