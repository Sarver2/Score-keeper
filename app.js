const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const scoreOption = document.querySelector("#scoreOption");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.classList.add("has-text-info");
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");

      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
  player.display.textContent = player.score;
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2Button.addEventListener("click", function () {
  updateScore(p2, p1);
});

function reset() {
  isGameOver = false;

  let players = [p1, p2];

  for (let i = 0; i < players.length; i++) {
    players[i].score = 0;
    players[i].display.textContent = 0;
    players[i].display.classList.remove("has-text-success", "has-text-danger");
    players[i].button.disabled = false;
  }

  // for (let p of [p1, p2]) {
  //   p.score = 0;
  //   p.display.textContent = 0;
  //   p.display.classList.remove("has-text-success", "has-text-danger");
  //   p.button.disabled = false;
  // }
}

resetButton.addEventListener("click", reset);

scoreOption.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
