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

function add() {
    result = num1 + num2;
    return result
}

function subtract(){
    result = num1 - num2;
    return result
}

function divide(){
    result = num1 / num2;
    return result
}

function multiply(){
    result = num1 * num2;
    return result
}

function operate(){
    if (operator === '+') {
        add()
    } else if (operator === '-') {
        subtract()
    } else if (operator === '/') {
        divide()
    } else if (operator === 'x') {
        multiply();
    }
} 
buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'oBracket':
            document.getElementById('display').value = '(';
            break;
        case 'cBracket':
            document.getElementById('display').value = ')';
            break;
        case 'percent':
            document.getElementById('display').value = '%';
            break;
        case 'reset':
            document.getElementById('display').value = '';
            num1 = 0
            num2 = 0
            operator = ''
            break;
        case 'one':
            if (operator === '') {
                document.getElementById('display').value = `${num1 = 1}`;
            } else if (operator !== '') {
                document.getElementById('display').value = `${num1 = 1}`;
            }
            break;
        case 'two':
            if (operator === '') {
                document.getElementById('display').value = `${num1 = 2}`;
            } else if (operator !== '') {
                document.getElementById('display').value = `${num2 = 2}`;
            }
            break;  
        case 'three':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 3}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 3}`;
            }
            break;
        case 'four':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 4}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 4}`;
            }
            break;
        case 'five':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 5}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 5}`;
            }
            break;
        case 'six':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 6}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 6}`;
            }
            break;
        case 'seven':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 7}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 7}`;
            }
            break;
        case 'eight':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 8}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 8}`;
            }
            break;
        case 'nine':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 9}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 9}`;
            }
            break;
        case 'zero':
            if (operator === '') {
                document.getElementById('display').value += `${num1 = 0}`;
            } else if (operator !== '') {
                document.getElementById('display').value += `${num2 = 0}`;
            }
            break;
        case 'plus':
            document.getElementById('display').value = '+';
            operator = '+';
            break;
        case 'equal':
            document.getElementById('display').value = operate();
            let str = result.toString()
            document.getElementById('display').value = str;
            break;
        case 'minus':
            document.getElementById('display').value = '-';
            operator = '-';
            break;
        case 'multiply':
            document.getElementById('display').value = 'x';
            operator = 'x';
            break;
        case 'divide':
            document.getElementById('display').value = '÷';
            operator = '/';
            break;
        case 'decimal':
            document.getElementById('display').value += '.';
            break;
    }
});