const inputValue = document.querySelector("#input");
inputValue && inputValue.addEventListener("change", function(event) {
  calculate(event.target.value);
});

function calculate(value) {
  const regularExp = /\+|\-|\*|\//;
  // let value = value;
  let result;

  let num1 = +value.split(regularExp)[0];
  let num2 = +value.split(regularExp)[1];
  const matchedOperator = value.match(regularExp) ? value.match(regularExp)[0] : null;

  console.log(num1, num2, matchedOperator);

  
  if (isNaN(num1) || isNaN(num2) || matchedOperator === null) {
    updateResult("Operation Not Recognized");
    return;
  }
  
  let calculator = new Calculator();
  calculator.add(num1);

  switch (matchedOperator) {
    case "+":
      result = calculator.add(num2);
      break;
    case "-":
      result = calculator.subtract(num2);
      break;
    case "*":
      result = calculator.multiply(num2);
      break;
    case "/":
      result = calculator.divide(num2);
      break;
    default: result = "Operation Not Recognized";
  }

  updateResult(result);

}

function updateResult(value) {
  const element = document.getElementById('result');
  if (value) {
    element.innerText = value;
  }
}
