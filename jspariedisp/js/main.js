//CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI
let evenOddUserChoice = prompt("Seleziona la tua giocata pari o dispari?");

//CHIEDERE ALL'UTENTE UN NUMERO TRA 1 E 5
let numberUserChoiceString = prompt("Inserisci un numero tra 1 e 5");

//CONTROLLIAMO SE L'UTENTE HA SCRITTO UN NUMERO
let numberUserChoice = validateAndConvertUntilInputNumber(numberUserChoiceString);
//GENERARE UN NUMERO RANDM TRA 1 E 5(FUNZIONE)
let randomNumber = generateRandomNumber();
console.log(randomNumber);

//SOMMIAMO I DUE NUMERI

//STABILIRE SE LA SOMMA E' PARI O DISPARI(FUNZIONE)

//DICHIARIAMO SE L'UTENTE HA VINTO







//----- FUNZIONI ------

//FUNZIONE PER CONTROLLARE E VALIDARE IL PROMPT
function validateAndConvertUntilInputNumber(stringa){
    while(isNaN(stringa) || stringa == "" ){
        stringa = prompt("Reinserisci un numero: ");
    }

    // Qui sono sicuro che la mia stringa conterrà un numero
    let numero = parseInt(stringa);
    return numero;
}

function generateRandomNumber(){
    let result = Math.floor(Math.random() * 5) + 1;
    return result;
}