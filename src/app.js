import calculator from "./script/calculator.js";

let currExpression = "";
const expression = document.getElementById("expression");
const result = document.getElementById("result");
const keypad = document.getElementById("keypad");

keypad.addEventListener("click", (e) => {
  const type = e.target.dataset.type;

  if (!type) return; //Stop Function

  if (type === "num") {
    result.textContent = "";
    const entry = e.target.dataset.value;
    calculator.addEntry(entry);
    setDisplay();
  }
  if (type === "op") {
    const entry = e.target.dataset.value;
    calculator.addEntry(entry);
    currExpression = calculator.getArray().join(" ");
    setDisplay();
  }

  if (type === "equal") {
    const res = calculator.getResult();
    console.log("res:", res);
    console.log("typeof res:", typeof res);
    if (typeof res === "number") {
      result.textContent = "";
      calculator.allClear();
      currExpression = "";
      calculator.addEntry(res);
    } else {
      console.log("ini else");
      result.textContent = res;
      calculator.allClear();
    }

    setDisplay();
    return;
  }
  if (type === "func") {
    const action = e.target.dataset.action;
    if (action === "clear") {
      currExpression = "";
      result.textContent = "";
      calculator.allClear();
    } else if (action === "sign") {
      calculator.toggleSign();
    }

    setDisplay();
  }
});

function setDisplay() {
  if (calculator.getArray().length > 0)
    currExpression =
      calculator.getArray().join(" ") + " " + calculator.getBuffer();
  else if (calculator.getBuffer() !== "")
    currExpression = calculator.getBuffer();
  expression.textContent = currExpression;
  console.log(currExpression);
}
