import calculator from "./script/calculator.js";
import {renderHistory, clearHistory, addHistory} from "./script/history.js"
import { initTheme, toggleTheme } from "./script/theme.js";
import "./script/keyboard.js"

let currExpression = "";
const expression = document.getElementById("expression");
const result = document.getElementById("result");
const keypad = document.getElementById("keypad");
const historyList = document.getElementById('history-list')
const clearHistoryBtn = document.getElementById('clear-history')
const toggleThemeBtn = document.getElementById('theme-toggle')
const display = document.getElementById('display')


//MAIN RENDER
renderHistory(historyList)
initTheme()

keypad.addEventListener("click", (e) => {
  const type = e.target.dataset.type;
  const isButton = e.target.closest('button')

  if (!type && !isButton) return; //Stop Function
  isButton.blur() //Clear button focus

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
    if (typeof res === "number") {
      if (calculator.getArray().length > 0){
        addHistory(currExpression, res)
        renderHistory(historyList)
      }
      result.textContent = "";
      calculator.allClear();
      currExpression = "";
      calculator.addEntry(res);
    } else {
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

clearHistoryBtn.addEventListener('click', ()=> {
  clearHistory()
  renderHistory(historyList)
})

toggleThemeBtn.addEventListener('click', ()=> {
  toggleTheme()
})

document.getElementById('history-btn').addEventListener('click',()=> {
  document.getElementById('overlay').classList.toggle("show")
  document.getElementById('history').classList.toggle("show")
})

function setDisplay() {
  if (calculator.getArray().length > 0)
    currExpression =
      calculator.getArray().join(" ") + " " + calculator.getBuffer();
  else if (calculator.getBuffer() !== "")
    currExpression = calculator.getBuffer();
  expression.textContent = currExpression;
}
