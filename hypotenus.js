let base = document.querySelector("#base");
let height = document.querySelector("#height");
let hypoBtn = document.querySelector("#hypo-btn");
let outputEl = document.querySelector(".output");

function calculateHypotenuse() {
  if (base.value == "" || height.value == "") {
    outputEl.innerText = "Please Enter all the fields to get the hypotenuse";
  } else {
    let a = +base.value;
    let b = +height.value;
    let h = Math.sqrt(a * a + b * b);
    outputEl.innerText = `The length of hypotenuse is ${h}`;
  }
}
hypoBtn.addEventListener("click", calculateHypotenuse);
