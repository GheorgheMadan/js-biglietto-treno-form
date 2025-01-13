// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const card = document.querySelector('.biglietto')
// Selezioniamo gli elementi di input dal html 
const nameField = document.getElementById('name')
const pathField = document.getElementById('path-field')
const ageField = document.getElementById('age-field')
const mailField = document.getElementById('email')
const button = document.getElementById('buttone')
const form = document.querySelector('form')

// selezioniamo l'elemento di output
const outputName = document.getElementById('output-name')
const outputPath = document.getElementById('output-path')
const outputAge = document.getElementById('output-age')
const outputResult = document.getElementById('result')
const outputMail = document.getElementById('output-mail')
const outputOffer = document.getElementById('offerta')

// seleziono il paragrafo dal html dove andranno i numeri generati random 
const randomDa1A8 = document.getElementById('random1-7')
const randomDa1000 = document.getElementById('random1000')

form.addEventListener('submit', (event) => {
    
    // blocco l'invio del form
    event.preventDefault();
    card
    // vedo se funziona
    console.log("provo ad inviare il form");
     // stampo l'output del nome e della mail del utente
     outputName.innerHTML = nameField.value;
     outputMail.innerHTML = mailField.value;
     
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
            outputResult.innerHTML = "€ " + prezzoScontatoMinore.toFixed(2);
            outputOffer.innerText = "Biglietto scontato del 20%"
        }
        // ALTRIMENTI SE ha più di 65 anni  
        else if (age >= 65) {
            // allora avrà uno sconto del 40%
            let scontoSenior = costoTotale * sconto40
            let prezzoScontatoSenior = costoTotale - scontoSenior
            outputOffer.innerText = "Biglietto scontato del 40%"
            outputResult.innerHTML = "€ " + prezzoScontatoSenior.toFixed(2);
            }
        // ALTRIMENTI paga il prezzo intero
        else {
            outputOffer.innerText = "Biglietto standard"
            outputResult.innerHTML = "€ " + costoTotale.toFixed(2)
        }
        // con l'uso delle funzioni che ho collegato in un altro file genero i numeri random
        randomDa1A8.innerHTML = generaNumeroRandomRange(1, 7)
        randomDa1000.innerHTML = generaNumeroRandomRange(1000, 9999)
        card.className = "cardon border bg-white rounded ms-2"
}); 





