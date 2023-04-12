const sizeValue = document.querySelector("#sizeValue");
const sizeSlider = document.querySelector("#sizeSlider");
const containerGrid = document.querySelector("#grid");

let elementsValue = 16;

function clearGridContainer() {
  containerGrid.innerHTML = "";
}

function createGridElement() {
  clearGridContainer();

  grid.style.gridTemplateColumns = `repeat(${elementsValue}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${elementsValue}, 1fr)`;

  for (let i = 0; i < elementsValue * elementsValue; i++) {
    const element = document.createElement("div");
    element.classList.add("grid-element");
    containerGrid.appendChild(element);
  }
}

function updateSizeValue(e) {
  elementsValue = e.target.value;
  sizeValue.textContent = `${elementsValue} x ${elementsValue}`;
}

sizeSlider.addEventListener("mousemove", updateSizeValue);
sizeSlider.addEventListener("mouseup", createGridElement);
