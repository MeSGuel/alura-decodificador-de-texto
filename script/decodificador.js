// Script da Codificação e Decodificação de Texto:

const valorEntrada = document.getElementById('entrada');
const valorSaida = document.getElementById('saida');

const btnCode = document.getElementById("btn__codificar");
const btnDecode = document.getElementById("btn__decodificar");

const textoAviso = document.getElementById('aviso');

// Aqui usei um array pra criar uma lista dos caracteres que quero substituir e os substitutos.
// Tive essa ideia depois de estudar alguns códigos dos colegas...
const arrString = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
let regExp = /^[a-z\s]+$/i;

// Chamadores das funções:
btnCode.onclick = () => {
    let validador = regExp.test(valorEntrada.value);

    if(validador == true) {
        valorSaida.value = codificarTexto(valorEntrada.value);
        textoAviso.classList.remove('text--invertido');
    } else {
        textoAviso.classList.add('text--invertido');
        console.log('Falso');
    }

    valorSaida.classList.remove('shiba');
}

btnDecode.onclick = () => {
    let validador = regExp.test(valorSaida.value);

    if(validador == true) {
        valorEntrada.value = decodificarTexto(valorSaida.value);
        textoAviso.classList.remove('text--invertido');
    } else {
        console.log('Falso');
        textoAviso.classList.add('text--invertido');
    }

    valorSaida.classList.remove('shiba');
}


// Funções de Codificação e Decodificação:
function codificarTexto(textoEntrada) {
    textoEntrada = textoEntrada.toLowerCase();

    // Fiz um loop pra minha variável pode iterar sobre o array pra poder selecionar todos os grupos do array.
    // Verifiquei se o primeira tava incluso com "includes()", fiz substituição e retornei o valor;
    for(let i = 0; i < arrString.length; i++) {
        if(textoEntrada.includes(arrString[i][0])) {
            textoEntrada = textoEntrada.replaceAll(arrString[i][0], arrString[i][1]);
        }
    }

    console.log(true);
    return textoEntrada;
}

function decodificarTexto(textoSaida) {
    textoSaida = textoSaida.toLowerCase();

    // Engenharia reversa.
    for(let i = 0; i < arrString.length; i++) {
        if(textoSaida.includes(arrString[i][1])) {
            textoSaida = textoSaida.replaceAll(arrString[i][1], arrString[i][0]);
        }
    }

    console.log(true);
    return textoSaida;
}