const calculator = (function () {
  const operations = "+-×÷";
  let arr = [];
  let buffer = "";

  function _calculate() {
    let result = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
      if (arr[i] === "+") result += arr[i + 1];
      else if (arr[i] === "-") result -= arr[i + 1];
      else if (arr[i] === "×") result *= arr[i + 1];
      else if (arr[i] === "÷") result /= arr[i + 1];
      else return "Kesalahan Sintaks";
    }

    //Result Handler
    if (!Number.isFinite(result)) return "Tidak Terdefinisi";
    return Number(result.toFixed(12));
  }

  function _operatorHandler(operator) {
    //Buffer != tidak kosong -> push ke array+kosongkan buffer
    if (buffer !== "") {
      arr.push(Number(buffer));
      arr.push(operator);
      buffer = "";
      return;
    }

    //last char = operator + ketemu operator lagi -> ganti ke operator baru
    if (operations.includes(arr[arr.length - 1])) {
      arr[arr.length - 1] = operator;
      return;
    }
    //Jika arr kosong -> jangan push operator
    if (arr.length > 0) arr.push(operator);
  }

  function _percentHandler(num) {
    if (buffer.length <= 0) return;
    const percent = (Number(buffer) / 100).toString();
    buffer = percent;
    return;
  }
  function _bufferHandler(num) {
    if (num === "." && buffer.length <= 0) {
      buffer += "0.";
      return;
    }
    if (num === "." && buffer.includes(".")) return;
    buffer += num;
  }

  return {
    addEntry(char) {
      if (operations.includes(char)) {
        _operatorHandler(char);
        return;
      }
      if (char === "%") {
        _percentHandler(char);
        return;
      }
      _bufferHandler(char);
    },
    getArray() {
      return arr;
    },
    getBuffer() {
      return buffer;
    },
    getResult() {
      //Pre-result handler
      if (arr.length <= 0 && buffer !== "") {
        const finalRes = Number(buffer);
        this.allClear();
        return finalRes; 
      }
      if (arr.length <= 0) return 0; //arr kosong
      if (buffer === "") return "Format Error"; //last char adalah operator

      arr.push(Number(buffer));
      buffer = "";
      console.log(arr.join(" "));
      return _calculate();
    },
    toggleSign() {
      if (buffer.length <= 0 || Number(buffer) === 0) return;
      if (buffer.startsWith("-")) buffer = buffer.replace("-", "");
      else buffer = "-" + buffer;
    },
    allClear() {
      buffer = "";
      arr = [];
    },
  };
})();

export default calculator;
