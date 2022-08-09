let form = document.querySelector(".quiz-form");
let submitButton = document.querySelector(".submit");
let outputEl = document.querySelector(".quiz-output");
const correctAnswers = ["90°", "right angled", "one right angle"];
// const selectedAnswers = [];
function calculateScore(event) {
  event.preventDefault();
  let formResults = new FormData(form);
  let score = 0;
  let index = 0;
  for (let value of formResults.values()) {
    // selectedAnswers.push(key[1]);
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // for (let i = 0; i < correctAnswers.length; i++) {
  //   if (correctAnswers[i] == selectedAnswers[i]) {
  //     score = score + 1;
  //   }
  // }
  outputEl.innerText = "Your total score is " + score;
}

submitButton.addEventListener("click", calculateScore);
