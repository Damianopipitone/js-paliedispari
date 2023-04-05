//L'utente sceglie pari o dispari

let evenOrOdd = prompt("Scegli pari o dispari");

/*if (evenOrOdd != "pari" && evenOrOdd != "dispari" ) {

  prompt("Devi scegliere tra pari e dispari!");
}*/

// L'utente sceglie un numero da 1 a 5

let userNumber = prompt("Scegli un numero da 1 a 5");

let userNumberInt = parseInt(userNumber);




// ---------- FUNZIONI -----------

// Si genera un numero random tra 1 e 5

function getRandomInt(min, max) {

  min = 1;

  max = 5;

  return Math.floor(Math.random() * (max - min + 1) + min);
  
}

const pcNumber = getRandomInt(1, 5);

console.log (pcNumber);

function sumNumber(num1, num2) {
  
  let result = num1 + num2;

  return result;
}

const sum = sumNumber(userNumberInt, pcNumber);

console.log(sum);

function evenOrdOddSum (Even, Odd) {

  if ((userNumber + pcNumber) % 2 == 0) {

    console.log("La somma dei numeri è pari");
  } else {

    console.log("La somma dei numeri è dispari");
  };

}

const isEvenOrOdd = evenOrdOddSum(userNumber, pcNumber);

console.log(isEvenOrOdd);

if (sum % 2 == 0 && evenOrOdd == "pari"){
  
  console.log("Hai vinto!");

} else if (sum % 2 != 0 && evenOrOdd == "dispari") {
  
  console.log("Hai perso!");

};
