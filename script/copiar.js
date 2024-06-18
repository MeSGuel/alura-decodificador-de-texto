const btnCopyCode = document.getElementById("btn__codificar--copiar");
const btnCopyDecode = document.getElementById("btn__decodificar--copiar");

// Chamadores das funções:
btnCopyCode.onclick = () => {
    copiarCripto();
    valorSaida.classList.remove('shiba');
}

btnCopyDecode.onclick = () => {
    copiarDecripto();
    valorSaida.classList.remove('shiba');
}

// Funções de Copiar texto:
function copiarCripto() {
    navigator.clipboard.writeText(valorEntrada.value);
}

function copiarDecripto() {
    navigator.clipboard.writeText(valorSaida.value);
}
