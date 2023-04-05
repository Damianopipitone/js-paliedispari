let userWord = prompt("Inserisci una parola...");


function validatePalindrome (palindromeWord) {

    const word = (userWord.length);

    for (let i = 0; i < word / 2; i++) {

        if (userWord[i] !== userWord[word -1 -i]) {

            alert("Non è una parola palindroma");

        } else {

            alert("È una parola palindroma");

        };
    };
};

const value = validatePalindrome(userWord);