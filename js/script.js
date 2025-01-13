// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Selezioniamo gli elementi di input dal html 
const pathField = document.getElementById('path-field')
const titleField = document.getElementById('title-field')

// selezioniamo l'elemento di output 
const output = document.getElementById('output')


const costoPerkm = 0.20;
const sconto20 = 0.20;
const sconto40 = 0.40;
// INPUT dei km che il cliente vuole percorrere
let km = parseInt(prompt("Inserisci i kilometri da percorrere:"))
// Validazione, controllo se l'utente ha inserito corettamente i dati 
if (isNaN(km) || km <= 10) {
    alert("Per favore, inserisci un numero superiore a 10")
} else {
    // il PC  calcola quanto spenderà in base ai km che l'utente farà
    let costoTotale = km * costoPerkm
    console.log(costoTotale.toFixed(2))
    // INPUT dell'età del cliente
    let eta = parseInt(prompt("Inserisci i l'età: "))
        // SE ha meno di 18 anni
        if (eta < 18) {
            // allora avrà uno sconto del 20%
            let scontoMinorenne = costoTotale * sconto20
            let prezzoScontatoMinore = costoTotale - scontoMinorenne
            console.log(prezzoScontatoMinore.toFixed(2))
        }
        // ALTRIMENTI SE ha più di 65 anni  
        else if (eta >= 65) {
            // allora avrà uno sconto del 40%
            let scontoSenior = costoTotale * sconto40
            let prezzoScontatoSenior = costoTotale - scontoSenior
            console.log(prezzoScontatoSenior.toFixed(2))
            }
        // ALTRIMENTI paga il prezzo intero
        else {
            console.log(costoTotale.toFixed(2))
        }
}

