var output = document.querySelector(".output");
var currentEntry = document.querySelector(".currentEntry");

let expression = "";

function makeExp(h) {
  if (expression[expression.length - 1] !== "." || h !== ".") {
    expression = expression + h;
    currentEntry.textContent = expression;
  }
}
function calculate() {
  var result = eval(expression);
  output.textContent = result;
}
function clearAll() {
  currentEntry.textContent = "0";
  output.textContent = "_";
  expression = "";
}
function sqrcalcu() {
  const result = Math.sqrt(expression);
  output.textContent = result;
}
function remove() {
  expression = expression.slice(0, -1);
  currentEntry.textContent = expression;
}
