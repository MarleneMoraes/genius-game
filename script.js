let order = [];
let clickedOrder = [];
let score = 0;

const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const yellow = document.querySelector('#yellow');

// Shuffle order
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


// Light the next color
let lightColor = (element, number) => {
    number *= 500,
        setTimeout(() => {
            element.classList.add('selected');
        }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 150);
}

// button order check
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// User click

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Return color function
let createColorElement = (color) => {
    if (color == 0) {
        return red;
    } else if (color == 1) {
        return green;
    } else if (color == 2) {
        return blue;
    } else if (color == 3) {
        return yellow;
    }
}

// Next level game
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Start game
let playGame = () => {
    alert('Bem vindo ao Windows Genius!')
    score = 0;
    nextLevel();
}

// Click events
red.onclick = () => click(0);
green.onclick = () => click(1);
blue.onclick = () => click(2);
yellow.onclick = () => click(3);

playGame();