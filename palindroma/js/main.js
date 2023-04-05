// L'UTENTE INSERISCE UNA PAROLA

let userWord = prompt("Inserisci una parola...");

// ---- FUNZIONI -----

// CREO UNA FUNZIONE PER VERIFICARE SE LA PAROLA DELL'UTENTE È PALINDROMA

function validatePalindrome (palindromeWord) {

    // CREO UNA VARIABILE CHE MI TENGA CONTO DELLA LUNGHEZZA DELLA PAROLA

    const word = (userWord.length);

    // APRO UN CICLO CHE MI SPEZZA LA PAROLA IN DUE 

    for (let i = 0; i < word / 2; i++) {

        // SE LE DUE METÀ CORRISPONDONO LA PAROLA È PALINDROMA

        if (userWord[i] !== userWord[word -1 -i]) {

            alert("Non è una parola palindroma");

        } else {

            alert("È una parola palindroma");

        };
    };
};

const value = validatePalindrome(userWord);