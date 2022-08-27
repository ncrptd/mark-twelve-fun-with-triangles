let base = document.querySelector("#base");
let height = document.querySelector("#height");
let hypoBtn = document.querySelector("#hypo-btn");
let outputEl = document.querySelector(".output");

function calculateHypotenuse() {
  if (
    base.value == "" ||
    height.value == "" ||
    base.value < 0 ||
    height.value < 0
  ) {
    outputEl.innerText = "Please Enter valid input";
  } else {
    let a = +base.value;
    let b = +height.value;
    let c = Math.sqrt(a * a + b * b);
    outputEl.innerText = `The length of hypotenuse is ${c}`;
  }
}
hypoBtn.addEventListener("click", calculateHypotenuse);
