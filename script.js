let firstNum = null;
let secondNum = null;
let op = null;

const buttons = document.querySelectorAll('button');
const displayText = document.querySelector('.current');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (button.classList.contains('op')) {
            if (op !== null) {
                setUpOperate();
            }
            op = button.textContent.trim();
        } 
        else if (button.classList.contains('num')) {
            displayText.textContent += button.textContent;
            if (!op) {
                firstNum = displayText.textContent;
            }
            else {
               if (displayText.textContent === firstNum + button.textContent) {
                    displayText.textContent = button.textContent;
                }
                secondNum = displayText.textContent;
            }
        } 
        else if (button.classList.contains('clear')) {
            clear();
        } 
        else if (secondNum !== null){
            setUpOperate();
        }
    });
});

function setUpOperate() {
    firstNum = operate(firstNum, secondNum, op);
    secondNum = null;
    op = null;
    displayText.textContent = firstNum;
}

function clear() {
    displayText.textContent = '';
    firstNum = null;
    secondNum = null;
    op = null;
}

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
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "oopsies";
    }
}