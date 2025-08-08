document.addEventListener("DOMContentLoaded", () => {
  let result = document.getElementById("calculation-result");

  function addFunction(number1, number2) {
    return number1 + number2;
  }
  function subtractFunction(number1, number2) {
    return number1 - number2;
  }
  function multiplyFunction(number1, number2) {
    return number1 * number2;
  }
  function divideFunction(number1, number2) {
    return number1 / number2;
  }
  function getNum1() {
    let number1 = Number(
      parseFloat(document.getElementById("number1_input").value)
    );
    return number1;
  }
  function getNum2() {
    let number1 = Number(
      parseFloat(document.getElementById("number2_input").value)
    );
    return number1;
  }
  const add = document.getElementById("add");
  const subtract = document.getElementById("subtract");
  const multiply = document.getElementById("multiply");
  const divide = document.getElementById("divide");

  let number1 = Number(document.getElementById("number1_input").value);
  let number2 = Number(document.getElementById("number2_input").value);

  add.addEventListener("click", function () {
    number1 = getNum1();
    number2 = getNum2();
    result.textContent = addFunction(number1, number2);
  });
  subtract.addEventListener("click", function () {
    number1 = getNum1();
    number2 = getNum2();
    result.textContent = subtractFunction(number1, number2);
  });
  multiply.addEventListener("click", function () {
    number1 = getNum1();
    number2 = getNum2();
    result.textContent = multiplyFunction(number1, number2);
  });
  divide.addEventListener("click", function () {
    number1 = getNum1();
    number2 = getNum2();
    result.textContent = divideFunction(number1, number2);
  });
});
