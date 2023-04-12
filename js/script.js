const sizeValue = document.querySelector("#sizeValue");
const sizeSlider = document.querySelector("#sizeSlider");
const containerGrid = document.querySelector("#grid");

let elementsValue = 16;
let is_active;

window.onmousedown = function () {
  is_active = true;
};

window.onmouseup = function () {
  is_active = false;
};

function colorElement(e) {
  if (is_active) {
    e.target.style.backgroundColor = "black";
    e.target.style.border = "black";
  }
}

function clearGridContainer() {
  containerGrid.innerHTML = "";
}

function createGridElement() {
  clearGridContainer();

  containerGrid.style.gridTemplateColumns = `repeat(${elementsValue}, 1fr)`;
  containerGrid.style.gridTemplateRows = `repeat(${elementsValue}, 1fr)`;

  for (let i = 0; i < elementsValue * elementsValue; i++) {
    const element = document.createElement("div");
    element.classList.add("grid-element");
    element.addEventListener("mousemove", colorElement);
    element.addEventListener("mouseup", colorElement);
    containerGrid.appendChild(element);
  }
}

function updateSizeValue(e) {
  elementsValue = e.target.value;
  sizeValue.textContent = `${elementsValue} x ${elementsValue}`;
}

sizeSlider.addEventListener("mousemove", updateSizeValue);
sizeSlider.addEventListener("mouseup", createGridElement);

createGridElement();
