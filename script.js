window.onload = () => {

    //paleta de cores
    const rgbRandom = () => {
        const red = Math.floor(Math.random() * (255 - 1));
        const green = Math.floor(Math.random() * (255 - 1));
        const blue = Math.floor(Math.random() * (255 - 1));
        return `rgb(${red} ${green} ${blue})`;
    }

    const paletaElement = document.getElementById('color-palette').children;
    for (let index = 1; index < paletaElement.length; index += 1) {
        paletaElement[index].style.backgroundColor = rgbRandom();
    }



}