const sizeValue = document.querySelector("#sizeValue");
const sizeSlider = document.querySelector("#sizeSlider");
const containerGrid = document.querySelector("#grid");
const reload = document.querySelector("#clearBtn");
const eraser = document.querySelector("#eraserBtn");

let color = "#000";
let elementsValue = 16;
let is_active;

window.onmousedown = function () {
  is_active = true;
};

window.onmouseup = function () {
  is_active = false;
};

function colorElement(e) {
  if (e.type === "mouseover" && !is_active) return;

  if (color === "#fefefe") {
    e.target.style.backgroundColor = color;
    e.target.style.borderColor = "#333";
  } else {
    e.target.style.backgroundColor = color;
    e.target.style.borderColor = color;
  }
}

function clearGridContainer() {
  containerGrid.innerHTML = "";
}

function erase() {
  color = "#fefefe";
}

function createGridElement() {
  clearGridContainer();

  containerGrid.style.gridTemplateColumns = `repeat(${elementsValue}, 1fr)`;
  containerGrid.style.gridTemplateRows = `repeat(${elementsValue}, 1fr)`;

  for (let i = 0; i < elementsValue * elementsValue; i++) {
    const element = document.createElement("div");
    element.classList.add("grid-element");
    element.addEventListener("mouseover", colorElement);
    element.addEventListener("mousedown", colorElement);
    containerGrid.appendChild(element);
  }
}

function updateSizeValue(e) {
  elementsValue = e.target.value;
  sizeValue.textContent = `${elementsValue} x ${elementsValue}`;
}

sizeSlider.addEventListener("mousemove", updateSizeValue);
sizeSlider.addEventListener("mouseup", createGridElement);

reload.addEventListener("click", createGridElement);
eraser.addEventListener("click", erase);

createGridElement();
