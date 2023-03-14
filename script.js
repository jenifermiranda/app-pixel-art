window.onload = () => {

    //paleta de cores
    const rgbRandom = () => {
        const red = Math.floor(Math.random() * (255 - 1));
        const green = Math.floor(Math.random() * (255 - 1));
        const blue = Math.floor(Math.random() * (255 - 1));
        return `rgb(${red} ${green} ${blue})`;
    }

    const blackColor = document.getElementsByClassName('color')[0];
    blackColor.style.backgroundColor = 'black';

    //botao cores aleatorias
    const botaoCores = document.getElementById('button-random-color');
    botaoCores.addEventListener('click', () => {
        const colorPalet = document.getElementById('color-palette').children;
        for (let index = 1; index < colorPalet.length; index += 1) {
            colorPalet[index].style.backgroundColor = rgbRandom();
        }
    });












}














// botaoCores.addEventListener('click', (event) => {
//     paletaElement.style.backgroundColor = event.target.;