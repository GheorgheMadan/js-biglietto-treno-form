// FUNZIONE CHE GENERA UN NUMERO DA ... A ... I NUMERI LI SCELGO IO
// console.log(generaNumeroRandomRange(100, 50))

function generaNumeroRandomRange(max, min){
    const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numeroGenerato
}

// ________________________________________________________________________________
