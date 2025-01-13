// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Selezioniamo gli elementi di input dal html 
const pathField = document.getElementById('path-field')
const ageField = document.getElementById('age-field')
const form = document.querySelector('form')

// selezioniamo l'elemento di output 
const outputPath = document.getElementById('output-path')
const outputAge = document.getElementById('output-age')
const outputResult = document.getElementById('result')

form.addEventListener('submit', (event) => {
    // blocco l'invio del form
    event.preventDefault();

    // vedo se funziona
    console.log("provo ad inviare il form");

    // // prendo i selettori di output e inserisco i valori ricevuti dal input
    // outputPath.innerHTML = pathField.value;
    // outputAge.innerHTML = ageField.value;

    const km = parseInt(pathField.value);
    const age = parseInt(ageField.value);

    // prezzi e sconto da eseguire
    const costoPerkm = 0.20;
    const sconto20 = 0.20;
    const sconto40 = 0.40;

    // il PC  calcola quanto spenderà in base ai km che l'utente farà
    let costoTotale = km * costoPerkm;
    console.log(costoTotale.toFixed(2))
    // INPUT dell'età del cliente
    // let eta = parseInt(prompt("Inserisci i l'età: "))
        // SE ha meno di 18 anni
        if (age < 18) {
            // allora avrà uno sconto del 20%
            let scontoMinorenne = costoTotale * sconto20
            let prezzoScontatoMinore = costoTotale - scontoMinorenne
            outputResult.innerHTML = prezzoScontatoMinore.toFixed(2);
        }
        // ALTRIMENTI SE ha più di 65 anni  
        else if (age >= 65) {
            // allora avrà uno sconto del 40%
            let scontoSenior = costoTotale * sconto40
            let prezzoScontatoSenior = costoTotale - scontoSenior
            outputResult.innerHTML = prezzoScontatoSenior.toFixed(2);
            }
        // ALTRIMENTI paga il prezzo intero
        else {
            outputResult.innerHTML = costoTotale.toFixed(2)
        }
}); 






