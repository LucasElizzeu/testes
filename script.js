function criarNotebook(marca, ram, memoria, processador) {
    return {
        marca,
        ram,
        memoria,
        processador,
        ligar() {
            console.log('O notebook está ligado.');
        }
    }
}

const notebook1 = criarNotebook('samsung', 16, 512, 'i5');
console.log(notebook1);