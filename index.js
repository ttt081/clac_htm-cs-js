let currentDisplay = "";
document.querySelector("#display").value = currentDisplay;

function curDisplay(currentDisplay) {
  document.querySelector("#display").value = currentDisplay;
}

document.querySelector("#plus").addEventListener("click", function () {
  currentDisplay += "+";
  curDisplay(currentDisplay);
});
document.querySelector("#minus").addEventListener("click", function () {
  currentDisplay += "-";
  curDisplay(currentDisplay);
});
document.querySelector("#mult").addEventListener("click", function () {
  currentDisplay += "*";
  curDisplay(currentDisplay);
});
document.querySelector("#division").addEventListener("click", function () {
  currentDisplay += "/";
  curDisplay(currentDisplay);
});
document.querySelector("#mod").addEventListener("click", function () {
  currentDisplay += "%";
  curDisplay(currentDisplay);
});

document.querySelector("#one").addEventListener("click", function () {
  currentDisplay += "1";
  curDisplay(currentDisplay);
});

document.querySelector("#two").addEventListener("click", function () {
  currentDisplay += "2";
  curDisplay(currentDisplay);
});
document.querySelector("#three").addEventListener("click", function () {
  currentDisplay += "3";
  curDisplay(currentDisplay);
});

document.querySelector("#four").addEventListener("click", function () {
  currentDisplay += "4";
  curDisplay(currentDisplay);
});

document.querySelector("#five").addEventListener("click", function () {
  currentDisplay += "5";
  curDisplay(currentDisplay);
});
document.querySelector("#six").addEventListener("click", function () {
  currentDisplay += "6";
  curDisplay(currentDisplay);
});

document.querySelector("#seven").addEventListener("click", function () {
  currentDisplay += "7";
  curDisplay(currentDisplay);
});

document.querySelector("#eight").addEventListener("click", function () {
  currentDisplay += "8";
  curDisplay(currentDisplay);
});

document.querySelector("#nine").addEventListener("click", function () {
  currentDisplay += "9";
  curDisplay(currentDisplay);
});

document.querySelector("#zero").addEventListener("click", function () {
  currentDisplay += "0";
  curDisplay(currentDisplay);
});

document.querySelector("#point").addEventListener("click", function () {
  currentDisplay += ".";
  curDisplay(currentDisplay);
});

document.querySelector("#del").addEventListener("click", function () {
  currentDisplay = currentDisplay.slice(0, -1);
  curDisplay(currentDisplay);
});

let result = 0;
document.querySelector("#equal").addEventListener("click", function () {
  result = eval(currentDisplay);
  getResult(result);
});
function getResult(result) {
  document.querySelector("#output").textContent = result;
}

document.querySelector("#C").addEventListener("click", function () {
  currentDisplay = "";
  result = 0;
  getResult(result);
  curDisplay(currentDisplay);
});
