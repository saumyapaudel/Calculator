var num1 = 0;
var num2 = 0;
var operator = '';
var display = '';

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    if(num2 !== 0){
    return num1/num2;
    }
    console.log('hi')
    return "WARNING CANNOT DIVIDE BY 0!!!!"
}

function operation(num1, num2, operator){
    switch(operator){
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1,num2);
        case 'multiply':
            return multiply(num1,num2);
        case "divide":
            return divide(num1,num2);
    }
}

function clearDisplay() {
    num1 = 0;
    num2 = 0;
    displayNum.innerHTML = '';
    display = ''
    operand = '';
}

const displayNum = document.getElementsByClassName('operations')[0];
const numbers = document.querySelectorAll('#number');
const operations = document.querySelectorAll('#operation');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.C')

numbers.forEach((number) =>{
    number.addEventListener('click', () =>{
        if(display.length<18)
        display += number.className;
        displayNum.innerHTML = display;
    })
})

operations.forEach((operand) =>{
    operand.addEventListener('click', () =>{
        num1 = parseInt(display);
        operator = operand.className;
        display = '';
    })
})

equal.addEventListener('click', () => {
    num2 = parseInt(display);
    num1 = operation(num1, num2, operator);
    if(num1.toString().length<17 && typeof num1 == "number") {display = parseFloat(num1.toFixed(16));}
    else if(typeof num1 == "number") {display = 'WARNING OVERFLOW!!!';}
    else {display = num1}
    displayNum.innerHTML = display;
})

clear.addEventListener('click', clearDisplay)