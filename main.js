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
    if (displayVal <= MAX_VALUE) {
        display.textContent = displayVal;
    } else {
        display.textContent = displayVal.toExponential(6);
    }
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
            displayVal = divide(num1, num2);
            break;
        default:
            alert("ERROR: Invalid operation.");
    }
    updateDisplay();
}

function resetAllValues() {
    num1 = num2 = operator = null;
}

let num1, num2, operator;
resetAllValues();
let displayVal = 0;
const MAX_VALUE = 999999999999;

const digitBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const display = document.querySelector("#display");

digitBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        if ((num2 != null || operator != null) && num2 <= MAX_VALUE / 10) {
            num2 = num2 * 10 + i;
            displayVal = num2;
        } else if (num1 <= MAX_VALUE / 10) {
            num1 = num1 * 10 + i;
            displayVal = num1;
        }
        updateDisplay();
    });
});

operatorBtns.forEach((button) => {
    button.addEventListener("click", () => { 
        if (num2 != null) {
            operate();
            operator = button.id;
            num1 = displayVal;
            num2 = null;
        } else if (num1 != null && operator == null) {
            operator = button.id;
        }
    });
})

clearBtn.addEventListener("click", () => {
    resetAllValues();
    displayVal = 0;
    updateDisplay();
});

equalsBtn.addEventListener("click", () => {
    if (num2 != null) {
        operate();
        resetAllValues();
    }
});

updateDisplay();    // Display shows 0 to start