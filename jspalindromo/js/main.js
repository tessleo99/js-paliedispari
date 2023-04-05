let wordUserChoice = prompt ("Inserisci una parola e scopri se è palindroma!");

let lenghtWord = console.log(wordUserChoice.length);


let wordLetter = wordUserChoice.split("");


console.log(wordLetter);

let wordLetterInv = [];

for (i = wordLetter.length - 1; i >= 0 ; i--){
    wordLetterInv.push(wordLetter[i]);

}

console.log(wordLetterInv);

let palindroma = true;

for (i = 0; i < wordLetter.length; i++){
    if (wordLetter[i] != wordLetterInv[i]){
        palindroma = false;
    }
}



if (palindroma = false){
    console.log("La tua parola non è palindroma");
} else if (palindroma = true){
    console.log("La tua parola è palindroma");
} 