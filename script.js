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
        for (let index = 1; index < colorPalet.length; index += 1) {
            // compara cores
            for (let compare = 1; compare < colorPalet.length; compare += 1) {
                if (colorPalet[compare].style.backgroundColor === colorPalet[index].style.backgroundColor) {
                    colorPalet[index].style.backgroundColor = rgbRandom();
                }
            }

            arrayColor.push(colorPalet[index].style.backgroundColor);
        }
        localStorage.setItem('colorPalette', JSON.stringify(arrayColor));
    }
    if (localStorage.getItem('colorPalette') !== null) {
        const recuperaCor = JSON.parse(localStorage.getItem('colorPalette'));

        for (let index = 0; index < recuperaCor.length; index += 1) {
            colorPalet[index + 1].style.backgroundColor = recuperaCor[index];
        }
    }

    //quadrado preto
    const blackColor = document.getElementsByClassName('color')[0];
    blackColor.style.backgroundColor = 'rgb(0, 0, 0)';


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

    //seleciona cor preta e tira o select
    const color = document.getElementsByClassName('color');
    const black = document.getElementsByClassName('color')[0];
    black.classList.add('selected');

    for (let index = 0; index < color.length; index += 1) {
        color[index].addEventListener('click', (event) => {
            const colorSelect = document.querySelector('.selected');
          if (colorSelect) {
            colorSelect.classList.remove('selected');
          }
          event.target.classList.add('selected');
        })
      }






}
