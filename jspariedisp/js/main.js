//CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI
let evenOddUserChoice = prompt("Seleziona la tua giocata pari o dispari?");

//CHIEDERE ALL'UTENTE UN NUMERO TRA 1 E 5
let numberUserChoiceString = prompt("Inserisci un numero tra 1 e 5");
//CONTROLLIAMO SE L'UTENTE HA SCRITTO UN NUMERO
let numberUserChoice = validateAndConvertUntilInputNumber(numberUserChoiceString);
console.log(numberUserChoice);

let numberUserChoice1 = onlyNumberFrom1To5(numberUserChoice);
console.log(numberUserChoice1);


//GENERARE UN NUMERO RANDM TRA 1 E 5(FUNZIONE)
let randomNumber = generateRandomNumber();
console.log(randomNumber);

//SOMMIAMO I DUE NUMERI
let sum = randomNumber + numberUserChoice;
console.log(sum);

//STABILIRE SE LA SOMMA E' PARI O DISPARI(FUNZIONE)
let sumEvenOrOdd = isEvenOrOdd(sum);
console.log(sumEvenOrOdd);


//DICHIARIAMO SE L'UTENTE HA VINTO

if ((evenOddUserChoice == "pari" && sum % 2 == 0) || evenOddUserChoice == "dispari" && sum % 2 == 1){
    console.log("Bravo, hai vinto!");
} else{
    console.log("Che peccato, hai perso...");
}














//----- FUNZIONI ------

//FUNZIONE PER CONTROLLARE E VALIDARE IL PROMPT
function validateAndConvertUntilInputNumber(string){
    while(isNaN(string) || string == "" ){
        string = prompt("Reinserisci un numero: ");
    }
    // Qui sono sicuro che la mia stringa conterrà un numero
    let numero = parseInt(string);
    return numero;
}

/*function onlyNumberFrom1To5(number, string){
    while (number < 1 || number > 5 ){
        string = prompt("Attenzione: il numero deve essere compreso tra 1 e 5!");
    }
    let numero = parseInt(string);
    return numero;
}*/



function generateRandomNumber(){
    let result = Math.floor(Math.random() * 5) + 1;
    return result;
}

function isEvenOrOdd (number){
    if (number % 2 == 0){
        return "pari";
    } else {
        return "dispari";
    }
}
