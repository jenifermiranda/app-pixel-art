window.onload = () => {
    const colorPalet = document.getElementById('color-palette').children;

    //gerado de cor
    const rgbRandom = () => {

        const red = Math.floor(Math.random() * (255 - 1));
        const green = Math.floor(Math.random() * (255 - 1));
        const blue = Math.floor(Math.random() * (255 - 1));

        return `rgb(${red} ${green} ${blue})`;
    }

    //botao cores aleatorias
    const botaoCores = document.getElementById('button-random-color');
    botaoCores.addEventListener('click', (event) => {
        geraCores();
    })


    //aplica cores na paleta
    function geraCores() {
        let arrayColor = [];
        let qualACor = '';
        for (let index = 1; index < colorPalet.length; index += 1) {
            // compara cores
            for (let compare = 1; compare < colorPalet.length; compare += 1) {
                if (colorPalet[compare].style.backgroundColor === colorPalet[index].style.backgroundColor) {
                    colorPalet[index].style.backgroundColor = rgbRandom();
                }
            }
        }
        qualACor += colorPalet[index].style.backgroundColor;
        arrayColor.push(qualACor);
        localStorage.setItem('corGerada', JSON.stringify(arrayColor));
    }

    //quadrado preto
    const blackColor = document.getElementsByClassName('color')[0];
    blackColor.style.backgroundColor = 'black';


    //quadrado 5x5
    const pixelBoard = document.getElementById('pixel-board');

    const createPixel = () => {
        for (let index = 0; index < 25; index += 1) {
            const elem = document.createElement('div');
            elem.className = 'pixel';
            pixelBoard.appendChild(elem);
        }
    }
    createPixel();


}
