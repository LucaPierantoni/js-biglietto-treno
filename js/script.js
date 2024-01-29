/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)

-va applicato uno sconto del 20% per i minorenni

-va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


const output = document.getElementById("out");
const outputSale = document.getElementById("out-sale");

/* ask user the NUMBER of km he needs to travel */
const km = parseInt(prompt("Insert the km you have to travel"));

/* ask the AGE of the user */
const age = parseInt(prompt("Insert your age"));

/* calculate the km inserted by user * 0.21 in price*/
const unitPrice = (km * 0.21).toFixed(2);

/* if the user is < 18 the result in price is - 20% 
and if the user is > 65 the result in price is - 40%*/
let percentile;
if (age < 18) {
    percentile = 20;
    outputSale.innerHTML = `Your Ticket costs ${unitPrice}€`
} else if (age > 65) {
    percentile = 40;
    outputSale.innerHTML = `Your Ticket costs ${unitPrice}€`
} else {
    percentile = 0;
}

const discount = (percentile / 100) * unitPrice;
const sale = (unitPrice - discount).toFixed(2);
output.innerHTML = `Your Ticket costs ${unitPrice}€`
output.innerHTML = `Your Ticket costs ${sale}€`