const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

const scoreOption = document.querySelector("#scoreOption");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.classList.add("has-text-info");
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
    }
  }
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.classList.add("has-text-primary");
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
    }
  }
  p2Display.textContent = p2Score;
});

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = 0;
  p2Display.textContent = 0;

  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
}

resetButton.addEventListener("click", reset);

scoreOption.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
