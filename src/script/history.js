const saveHistory = () => {
  localStorage.setItem("history", JSON.stringify(historyObject));
};
const getHistory = () => {
  return JSON.parse(localStorage.getItem("history"));
};

let historyObject = getHistory() || [];
const addHistory = (expression, result) => {
  const data = { expression, result };
  historyObject.push(data);
  saveHistory();
};
const renderHistory = (elemen) => {
  elemen.innerHTML= historyObject.toReversed().map((data) => 
    `<li>
      <p class="title">${data.expression}</p>
      <p class="result">${data.result}</p>
    </li>`
  ).join("")

  if (historyObject.length === 0)
    elemen.innerHTML = "<p>Tidak ada Riwayat</p>"
};
const clearHistory = () => {
  historyObject = []
 localStorage.removeItem("history")
}

export {renderHistory, clearHistory, addHistory}