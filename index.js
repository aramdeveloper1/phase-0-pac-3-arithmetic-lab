let currentNumber = "";
let previousNumber = "";
let operation = "";

function appendNumber(number) {
  currentNumber += number;
  document.querySelector('.display').value = currentNumber; // Simulates updating a display element
}

function appendOperator(op) {
  if (currentNumber === "") {
    return;
  }
  previousNumber = currentNumber;
  currentNumber = "";
  operation = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
}

function calculate() {
  if (currentNumber === "" || previousNumber === "") {
    return;
  }
  let result = 0;
  const prevNum = parseFloat(previousNumber);
  const curNum = parseFloat(currentNumber);
  switch (operation) {
    case '+':
      result = prevNum + curNum;
      break;
    case '-':
      result = prevNum - curNum;
      break;
    case '*':
      result = prevNum * curNum;
      break;
    case '/':
      if (curNum === 0) {
        alert("Division by zero is not allowed!");
        return;
      }
      result = prevNum / curNum;
      break;
    default:
      break;
  }
  currentNumber = result.toString();
  previousNumber = "";
  operation = "";
}
