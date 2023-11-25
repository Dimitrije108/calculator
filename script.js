let container = document.querySelector('.container');
let numbers = document.querySelectorAll('.number');
let zeroBtn = document.querySelector('.zero');
let operators = document.querySelectorAll('.operator');
let floatingPointBtn = document.querySelector('.floatingPoint');
let equalBtn = document.querySelector('.equal');
let delBtn = document.querySelector('.delete');
let clearBtn = document.querySelector('.clear');
let display = document.querySelector('.displayPara');

let a;
let operator;
let b;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);  
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':
            return modulo(a, b);
    }
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('number') && display.textContent === '0') {
        return display.textContent = e.target.value;
    } else if (e.target.classList.contains('number')) {
        return display.textContent += e.target.value;
    };

    if (e.target === zeroBtn && display.textContent !== '0') {
        return display.textContent += e.target.value;
    };

    if (e.target.classList.contains('operator')) {
        a = display.textContent;
        operator = e.target.value;
        if (display.textContent[display.textContent.length - 1] !== ' ') {
            display.textContent += ' ' + e.target.value + ' ';
        };
    };

    if (e.target === clearBtn) {
        return display.textContent = 0;
    };

    if (e.target === delBtn) {
        if (display.textContent.length === 1) {
            display.textContent = 0;
        } else if (/\s+$/.test(display.textContent)) {
            display.textContent = display.textContent.slice(0, -2);
        } else {
            display.textContent = display.textContent.slice(0, -1);
        };
    };

});

