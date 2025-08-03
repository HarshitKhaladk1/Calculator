document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementById("answer");
  let buttons = document.querySelectorAll("button");
  let expression = "";

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      let value = this.textContent;

      if (value === "AC") {
        expression = "";
        display.textContent = "0";
      } else if (value === "=") {
        try {
          expression = eval(expression).toString();
          display.textContent = expression;
        } catch {
          display.textContent = "Error";
          expression = "";
        }
      } else if (value === "+/-") {
        if (expression) {
          expression = (parseFloat(expression) * -1).toString();
          display.textContent = expression;
        }
      } else {
        if (display.textContent === "0" && value !== ".") {
          display.textContent = value;
          expression = value;
        } else {
          expression += value;
          display.textContent = expression;
        }
      }
    });
  });
});
