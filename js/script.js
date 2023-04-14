const sizeValue = document.querySelector("#sizeValue");
const sizeSlider = document.querySelector("#sizeSlider");
const containerGrid = document.querySelector("#grid");
const reload = document.querySelector("#clearBtn");
const eraser = document.querySelector("#eraserBtn");
const colorMode = document.querySelector("#colorBtn");
const colorPicker = document.querySelector("#colorPicker");
const rainbowBtn = document.querySelector("#rainbowBtn");

let color = "#000";
let colorCheck = "#000";
let colorRainbow;
let elementsValue = 16;
let is_active;

window.onmousedown = function () {
  is_active = true;
};

window.onmouseup = function () {
  is_active = false;
};

colorMode.classList.toggle("active");

function colorActive() {
  colorMode.classList.add("active");
  eraser.classList.remove("active");
  rainbowBtn.classList.remove("active");
  color = colorCheck;
}

function colorElement(e) {
  if (e.type === "mouseover" && !is_active) return;

  if (color === "#fefefe") {
    e.target.style.backgroundColor = color;
  } else if (rainbowBtn.classList.contains("active")) {
    e.target.style.backgroundColor = colorRandom();
  } else {
    e.target.style.backgroundColor = color;
  }
}

function colorRandom() {
  let R = Math.floor(Math.random() * 250);
  let G = Math.floor(Math.random() * 250);
  let B = Math.floor(Math.random() * 250);
  return (colorRainbow = `rgb(${R}, ${G}, ${B})`);
}

function clearGridContainer() {
  containerGrid.innerHTML = "";
}

function erase() {
  color = "#fefefe";
  eraser.classList.add("active");
  colorMode.classList.remove("active");
  rainbowBtn.classList.remove("active");
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
colorMode.addEventListener("click", colorActive);

colorPicker.addEventListener("change", (e) => {
  color = e.target.value;
  colorCheck = e.target.value;
});

rainbowBtn.addEventListener("click", () => {
  rainbowBtn.classList.add("active");
  eraser.classList.remove("active");
  colorMode.classList.remove("active");
});

createGridElement();
