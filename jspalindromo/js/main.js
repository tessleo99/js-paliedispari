//CHIEDO ALL'UTENTE UNA PAROLA
let wordUserChoice = prompt ("Inserisci una parola e scopri se è palindroma!");

//TRASFORMO LA STRINGA IN UN ARRAY
let wordLetter = wordUserChoice.split("");
console.log(wordLetter);

//CREO UN ARRAY VUOTO CHE SARA' L'INVERSO DELL'ARRAY DELLA PAROLA
let wordLetterInv = [];

//PUSHO NELL'ARRAY VUOTO LE LETTERE IN POSIZIONE INVERSA
for (i = wordLetter.length - 1; i >= 0 ; i--){
    wordLetterInv.push(wordLetter[i]);
}

console.log(wordLetterInv);

//CREO UNA VARIABILE BOOLEANA
let palindroma = true;

//CONFRONTO GLI ELEMENTI DEGLI ARRAY INDICE PER INDICE
for (i = 0; i < wordLetter.length; i++){
    if (wordLetter[i] != wordLetterInv[i]){
        palindroma = false;
    }
}

//STAMPO IN BASE ALLE CONDIZIONI SE LA PAROLA E' O MENO PALINDROMA
if (palindroma = false){
    console.log("La tua parola non è palindroma");
} else if (palindroma = true){
    console.log("La tua parola è palindroma");
} 