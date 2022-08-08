let angleInputs = document.querySelectorAll(".angle-input");
let isTriangleButton = document.querySelector(".is-triangle-button");
let outputEl = document.querySelector(".output-el");

function calculateSumOfTriangles() {
  let sum = 0;
  angleInputs.forEach((angle) => {
    sum += +angle.value;
  });
  if (sum === 180) {
    outputEl.innerText = "Yay, the angles form a triangle";
  } else {
    outputEl.innerText = "Oops, the angles doesn't form a triangle";
  }
}

isTriangleButton.addEventListener("click", calculateSumOfTriangles);
