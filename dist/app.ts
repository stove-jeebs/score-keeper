const select = document.querySelector("#select") as HTMLSelectElement;
const btn1 = document.querySelector("#player1") as HTMLButtonElement;
const btn2 = document.querySelector("#player2") as HTMLButtonElement;
const resetBtn = document.querySelector("#reset") as HTMLButtonElement;
const score1 = document.querySelector("#score1") as HTMLSpanElement;
const score2 = document.querySelector("#score2") as HTMLSpanElement;

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;

function disableButtons() {
  btn1.disabled = true;
  btn2.disabled = true;
}

function enableButtons() {
  btn1.disabled = false;
  btn2.disabled = false;
}

function reset() {
  p1Score = 0;
  p2Score = 0;
  score1.textContent = "0";
  score2.textContent = "0";
  isGameOver = false;
  score1.style.color = "black";
  score2.style.color = "black";
  select!.options[0].selected = true;
  disableButtons();
}

select?.addEventListener("change", function (event) {
  if (this?.value !== "") {
    enableButtons();
    winningScore = parseInt(this?.value);
  } else reset();
});

btn1?.addEventListener("click", function (event) {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      score1.style.color = "green";
      score2.style.color = "red";
    }
    score1.textContent = p1Score.toString();
  }
});

btn2?.addEventListener("click", function (event) {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      score1.style.color = "red";
      score2.style.color = "green";
    }
    score2.textContent = p2Score.toString();
  }
});

resetBtn?.addEventListener("click", reset);
