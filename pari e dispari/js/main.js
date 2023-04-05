// L'utente sceglie pari o dispari

let evenOrOdd = prompt("Scegli pari o dispari");

if (evenOrOdd != "pari" && evenOrOdd != "dispari") {
    prompt("Devi scegliere ta pari e dispari!")
};

//L'utente sceglie un numero da 1 a 5

let userNumber = prompt("Scegli un numero da 1 a 5");

// Generaiamo un numero random con una funzione

function cpuNumber(randomNumber) {
    
  let x = Math.floor((Math.random()* 5)+ 1);
    
  return x;
    
};


