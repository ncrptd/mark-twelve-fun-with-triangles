let sides = document.querySelectorAll(".area");
let areaButton = document.querySelector(".area-button");
let outputEl = document.querySelector(".output");

function calculateArea() {
  let a = +sides[0].value;
  let b = +sides[1].value;
  let c = +sides[2].value;
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  outputEl.innerText = `Area of a triangle is ${area} units`;
}
areaButton.addEventListener("click", calculateArea);
