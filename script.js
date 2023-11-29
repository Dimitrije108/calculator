let container = document.querySelector('.container');
let zeroBtn = document.querySelector('.zero');
let floatingPointBtn = document.querySelector('.floatingPoint');
let plusMinusBtn = document.querySelector('.minus');
let delBtn = document.querySelector('.delete');
let clearBtn = document.querySelector('.clear');
let equalBtn = document.querySelector('.equal');
let display = document.querySelector('.displayPara');

let a;
let operator;
let b;
let dotCount = 0;
let minusCount = 0;
let search;
let delMinus;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;

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
        display.textContent = e.target.value;
    } else if (e.target.classList.contains('number')) {
        display.textContent += e.target.value;
    };

    if (e.target === zeroBtn && display.textContent !== '0' && display.textContent[display.textContent.length - 2] !== ' ') {
        display.textContent += e.target.value;
    };

    if (e.target.classList.contains('operator')) {
        if (/\d$/.test(display.textContent.slice(-1))) {
            display.textContent += ' ' + e.target.value + ' ';
        };
        dotCount = 0;
        minusCount = 0;
    };

    if (e.target === clearBtn) {
        display.textContent = 0;
        dotCount = 0;
        minusCount = 0;
    };

    if (e.target === delBtn) {
        if (display.textContent.length === 1) {
            display.textContent = 0;
            dotCount = 0;
            minusCount = 0;
        } else if (/\s+$/.test(display.textContent)) {
            display.textContent = display.textContent.slice(0, -3);
            dotCount = 0;
            minusCount = 0;
            if (display.textContent.length <= 1) {
                display.textContent = 0;
            }
        } else {
            display.textContent = display.textContent.slice(0, -1);
        };
    };

    if (e.target === floatingPointBtn && /\d/.test(display.textContent[display.textContent.length - 1])) {
        if (dotCount === 0) {
            display.textContent += '.';
            dotCount++;
        };
    };

    if (e.target === plusMinusBtn) {
        search = display.textContent.lastIndexOf(' ');
        if (minusCount === 1 && display.textContent[display.textContent.length - 1] !== ' ') {
            delMinus = display.textContent.lastIndexOf('-');
            display.textContent = display.textContent.slice(0, delMinus) + display.textContent.slice(delMinus + 1);
            minusCount = 0;
        } else if (search !== -1 && minusCount === 0 && display.textContent[display.textContent.length - 1] !== ' ') {
            display.textContent = display.textContent.slice(0, search + 1) + '-' + display.textContent.slice(search + 1);
            minusCount++;
        } else if (minusCount === 0 && display.textContent[display.textContent.length - 1] !== ' ') {
            display.textContent = '-' + display.textContent.slice(0);
            minusCount++;
        };
    }
});

