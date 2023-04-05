let userWord = prompt("Inserisci una parola...");

let reverseWord = [];

for (let i = userWord.length - 1; i >= 0; i--) {

    reverseWord += userWord[i];
    
}

console.log(reverseWord);

if (userWord == reverseWord) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
};