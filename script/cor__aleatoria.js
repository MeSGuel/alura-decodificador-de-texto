// Script do logo da Alura:
let botaoImg = document.getElementById('btn__img');

botaoImg.onclick = () => {
    document.body.style.backgroundColor = `rgb(${gerarRgbAleatorio()}, ${gerarRgbAleatorio()}, ${gerarRgbAleatorio()})`;
}

// Aqui fiz um gerador de números RGBs aleatórios e adicionei os valores no background do meu body, como fiz acima.
function gerarRgbAleatorio() {
    let rgbAleatorio;

    for(let i = 0; i < 3; i++) {
        rgbAleatorio = Math.floor(Math.random() * 250);
    }

    return rgbAleatorio;
}
