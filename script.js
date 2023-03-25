let firstNum = 3;
let secondNum = 5;
let op = '+';

const buttons = document.querySelectorAll('button');
const displayText = document.querySelector('.current');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        displayText.textContent += button.textContent;
    })
})
function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "oopsies";
    }
}