function criarCelular2 (marca,modelo,tela){
    return {
        marca,
        modelo,
        tela,
    }
}

const newCelular = criarCelular2('apple', 'iPhone 15', 6.1);
console.log(newCelular);

const newObject3 = Object.assign({
    cor: 'preto',
    memoria: 128,
    conectividade: '5G'
}, newCelular);
console.log(newObject3);