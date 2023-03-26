let firstNum = null;
let secondNum = null;
let op = null;

const buttons = document.querySelectorAll('button');
const displayText = document.querySelector('.current');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (button.classList.contains('op')) {
            if (op !== null && secondNum !== null) {
                setUpOperate();
            }
            op = button.textContent.trim();
        } 
        else if (button.classList.contains('num')) {
            if (!button.classList.contains('decimal') || !displayText.textContent.includes('.')) {
                displayText.textContent += button.textContent;
            }
            
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
        else if (button.classList.contains('delete')) {
            if (!secondNum) {
                displayText.textContent = displayText.textContent.slice(0, displayText.textContent.length-1);
                firstNum = displayText.textContent;
            }
            else {
                secondNum = Math.floor(firstNum / 10);
                displayText.textContent = secondNum;
            }
        }
        else if (button.classList.contains('funny')) {
            const random = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
            document.body.setAttribute('style', `background-color: rgb(${random[0]}, ${random[1]}, ${random[2]});`);
        }
        else if (secondNum !== null){
            setUpOperate();
        } 
    });
});

function setUpOperate() {
    console.log('nani');
    console.log(firstNum);
    console.log(secondNum);
    console.log(op);
    firstNum = operate(firstNum, secondNum, op);
    firstNum = Math.round(firstNum*10000)/10000;
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

function remainder(a, b) {
    return +a % +b;
}

function operate(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        case '%':
            return remainder(a, b);
        default:
            return "oopsies";
    }
}