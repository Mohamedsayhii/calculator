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

function operate(operation, a, b) {
  return operation(a, b);
}

//display
let currentOperation = document.querySelector(".current-operation");
let buttons = document.querySelectorAll(".numbers button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperation.textContent = button.textContent;
  });
});
