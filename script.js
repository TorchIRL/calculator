

const minus = document.querySelector('#minus')
minus.textContent = '-'
const oBracket = document.querySelector('#oBracket')
oBracket.textContent = '('
const cBracket = document.querySelector('#cBracket')
cBracket.textContent = ')'

let buttons = document.querySelector('.buttons');
let display = document.querySelector('#display')

let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;
function add(num1, num2){
    let a = num1 + num2;
    return a
}

function subtract(num1, num2){
    let s = num1 - num2;
    return s
}

function divide(num1, num2){
    let d = num1 / num2;
    return d
}

function multiply(num1, num2){
    result = num1 * num2;
    return result
}

function operate(num1, operator, num2){
    if (operator === '+') {
        add(num1, num2)
        document.getElementById('display').value = result;
    } else if (operator === '-') {
        subtract(num1, num2)
        document.getElementById('display').value = s;
    } else if (operator === '/') {
        divide(num1, num2)
        document.getElementById('display').value = d;
    } else if (operator === 'x') {
        multiply(num1, num2);
        document.getElementById('display').value = m;
    }
} 
buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'oBracket':
            document.getElementById('display').value += '(';
            break;
        case 'cBracket':
            document.getElementById('display').value += ')';
            break;
        case 'percent':
            document.getElementById('display').value += '%';
            break;
        case 'reset':
            document.getElementById('display').value = '';
            break;
        case 'one':
            document.getElementById('display').value += '1';
            break;
        case 'two':
            document.getElementById('display').value += '2';
            break;        
        case 'three':
            document.getElementById('display').value += '3';
            num2 = 3
            break;
        case 'four':
            document.getElementById('display').value += '4';
            break;
        case 'five':
            document.getElementById('display').value += '5';
            num1 = 5
            break;
        case 'six':
            document.getElementById('display').value += '6';
            break;
        case 'seven':
            document.getElementById('display').value += '7';
            break;
        case 'eight':
            document.getElementById('display').value += '8';
            break;
        case 'nine':
            document.getElementById('display').value += '9';
            break;
        case 'zero':
            document.getElementById('display').value += '0';
            break;
        case 'plus':
            document.getElementById('display').value += '+';
            operator = '+'
            break;
        case 'equal':
            document.getElementById('display').value = operate(num1, num2, operator);
            break;
        case 'minus':
            document.getElementById('display').value += '-';
            break;
        case 'multiply':
            document.getElementById('display').value += 'x';
            break;
        case 'divide':
            document.getElementById('display').value += '÷';
            break;
        case 'decimal':
            document.getElementById('display').value += '.';
            break;
    }
});