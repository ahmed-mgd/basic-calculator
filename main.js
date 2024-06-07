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

function updateDisplay() {
    display.textContent = displayVal;
}

function operate() {
    switch (operator) {
        case "add":
            displayVal = add(num1, num2);
            break;
        case "subtract":
            displayVal = subtract(num1, num2);
            break;
        case "multiply":
            displayVal = multiply(num1, num2);
            break;
        case "divide":
            displayVal= divide(num1, num2);
            break;
        default:
            alert("Invalid operation.");
    }
    updateDisplay();
}

let num1 = null;
let num2 = null;
let operator = null;
let displayVal = 0;

const digitBtns = document.querySelectorAll(".number");
digitBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        if (num2 != null || operator != null) {
            num2 = num2 * 10 + i;
            displayVal = num2;
        } else {
            num1 = num1 * 10 + i;
            displayVal = num1;
        }
        updateDisplay();
    });
});

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");

addBtn.addEventListener("click", () => { 
    if (num2 != null) {
        operate();
        operator = "add";
        num1 = displayVal;
        num2 = null;
    } else if (num1 != null && operator == null) {
        operator = "add";
    }
});

subtractBtn.addEventListener("click", () => { 
    if (num2 != null) {
        operate();
        operator = "subtract";
        num1 = displayVal;
        num2 = null;
    } else if (num1 != null && operator == null) {
        operator = "subtract";
    }
});

multiplyBtn.addEventListener("click", () => { 
    if (num2 != null) {
        operate();
        operator = "multiply";
        num1 = displayVal;
        num2 = null;
    } else if (num1 != null && operator == null) {
        operator = "multiply";
    }
});

divideBtn.addEventListener("click", () => { 
    if (num2 != null) {
        operate();
        operator = "divide";
        num1 = displayVal;
        num2 = null;
    } else if (num1 != null && operator == null) {
        operator = "divide";
    }
});

clearBtn.addEventListener("click", () => {
    num1 = null;
    num2 = null;
    operator = null;
    displayVal = 0;
    updateDisplay();
});

equalsBtn.addEventListener("click", () => {
    if (num2 != null) {
        operate();
        num1 = null;
        num2 = null;
        operator = null;
    }
});

const display = document.querySelector("#display");

updateDisplay();    // Display shows 0 to start