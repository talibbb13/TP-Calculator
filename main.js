
var input = document.getElementById("input");

var expression = "";

function press(num) {

  expression += num;
  input.value = expression;
}

function equal() {

  if (expression.includes('%')) {
    expression = expression.replace('%', '');
    input.value = eval(expression) / 100;
  }
  else {
    input.value = eval(expression);
    expression = "";
  }

  var inputResult = document.querySelector(".input-result");
  inputResult.classList.add("result-active");
  setTimeout(function() {
    inputResult.classList.remove("result-active");
  }, 100);
}

function cleared() {
  expression = 0;
  input.value = 0;
}

function deleted() {
  expression = expression.slice(0, -1);
  input.value = expression;
}