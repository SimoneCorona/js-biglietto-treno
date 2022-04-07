// DATI
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



// Chiedere all'utente il numero di chilometri che vuole percorrere
const num_km = parseInt(prompt('Quanti Km devi percorrere?'))
console.log(num_km);

// chiedere all'utente l'età del passeggero
const user_age = parseInt(prompt('Quanti anni ha il passeggero?'))
console.log(user_age);

//prezzo del biglietto definito in base ai km (0.21 € al km)
const price_per_km = (num_km * 0.21)
console.log(price_per_km);

const price_per_km_rounded = (price_per_km.toFixed(2));
console.log(price_per_km_rounded); 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
let price_discount
if (user_age < 18) {
    (price_per_km_rounded * 20) / 100 
} else if(user_age > 65) {
    (price_per_km_rounded * 40) / 100 
} else {
    (price_per_km_rounded)
}
console.log(price_discount)

const final_price = parseInt(price_per_km - price_discount);
console.log(final_price);
 
document.getElementById(price_travel).innerHTML = final_price;