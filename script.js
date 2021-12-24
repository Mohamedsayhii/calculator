let currentOperation;
let firstOperand;
let secondOperand;

const currentOperationScreen = document.querySelector("#currentOperation");
const lastOperationScreen = document.querySelector("#lastOperation");

const clearBtn = document.querySelector("#clearButton");
const deleteBtn = document.querySelector("#deleteButton");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const pointBtn = document.getElementById("pointBtn");

//display

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperationScreen.textContent == 0
      ? (currentOperationScreen.textContent = button.textContent)
      : (currentOperationScreen.textContent += button.textContent);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      currentOperationScreen.textContent == "" &&
      lastOperationScreen.textContent == ""
    )
      return;
    firstOperand = currentOperationScreen.textContent;
    currentOperationScreen.textContent = "";
    lastOperationScreen.textContent = firstOperand + " " + button.textContent;

    currentOperation = button.textContent;
  });
});

equalsButton.addEventListener("click", compute);
deleteBtn.addEventListener("click", deleteNumber);
pointBtn.addEventListener("click", appendPoint);
clearBtn.addEventListener("click", clear);

function appendPoint() {
  if (currentOperationScreen.textContent.includes(".")) return;
  currentOperationScreen.textContent == ""
    ? (currentOperationScreen.textContent = "0.")
    : (currentOperationScreen.textContent += ".");
}

function compute() {
  if (
    currentOperationScreen.textContent == "" &&
    lastOperationScreen.textContent == ""
  )
    return;
  if (currentOperation === "÷" && currentOperationScreen.textContent === "0") {
    alert("You can't divide by 0!");
    currentOperationScreen.textContent = "";
    return;
  }

  lastOperationScreen.textContent +=
    " " + currentOperationScreen.textContent + " =";
  secondOperand = currentOperationScreen.textContent;
  console.log(`second operand is ${secondOperand}`);
  let result = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  currentOperationScreen.textContent = result;
}

function clear() {
  currentOperationScreen.textContent = "";
  lastOperation.textContent = "";
}

function deleteNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1);
}

function reloadScreen() {}

//keyboard
// function handleKeyboardInput(e) {
//   if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
//   if (e.key === ".") appendPoint();
//   if (e.key === "=" || e.key === "Enter") evaluate();
//   if (e.key === "Backspace") deleteNumber();
//   if (e.key === "Escape") clear();
//   if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
//     operate(convertOperator(e.key));
// }

// function convertOperator(keyboardOperator) {
//   if (keyboardOperator === "/") return "÷";
//   if (keyboardOperator === "*") return "x";
//   if (keyboardOperator === "-") return "-";
//   if (keyboardOperator === "+") return "+";
// }

//operations
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

function power(a, b) {
  return Math.pow(a, b);
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function operate(operation, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
