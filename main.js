function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case add:
            break;
        case subtract:
            break;
        case multiply:
            break;
        case divide:
            break;
        default:
            alert("Invalid operation.");
    }
}

let num1;
let num2;
let operator;
let displayVal;

const digitBtns = document.querySelectorAll(".number");
digitBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
    })
})
