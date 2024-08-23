let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += ` ${operator} `;
    document.getElementById('display').value = displayValue;
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function square() {
    let result = eval(displayValue);
    result = Math.pow(result, 2);
    document.getElementById('display').value = result;
    displayValue = result;
}
