// function criarNotebook(marca, ram, memoria, processador) {
//     return {
//         marca,
//         ram,
//         memoria,
//         processador,
//         ligar() {
//             console.log('O notebook está ligado.');
//         }
//     }
// }

// const notebook1 = criarNotebook('samsung', 16, 512, 'i5');
// console.log(notebook1);

function Celular(marca, ano, tamanhotela) {
    this.marca = marca,
        this.ano = ano,
        this.tamanhotela = tamanhotela,
        this.ligar = function() {
        console.log('O celular está ligando...')

    }
}

const celular = new Celular('samsung', 2022, 6.1);
console.log(celular);