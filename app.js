"use strict";
const rounds = document.querySelector('#select');
const btn1 = document.querySelector('#player1');
const btn2 = document.querySelector('#player2');
const resetBtn = document.querySelector('#reset');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
}
btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener('click', function (event) {
    score1.innerText = `${parseInt(score1.innerText) + 1}`;
    let value = rounds === null || rounds === void 0 ? void 0 : rounds.value;
    if (score1.innerText == value) {
        score1.style.color = 'green';
        score2.style.color = 'red';
        disableButtons();
    }
});
btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener('click', function (event) {
    score2.innerText = `${parseInt(score2.innerText) + 1}`;
    let value = rounds === null || rounds === void 0 ? void 0 : rounds.value;
    if (score2.innerText == value) {
        score2.style.color = 'green';
        score1.style.color = 'red';
        disableButtons();
    }
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', function (event) {
    btn1.disabled = false;
    btn2.disabled = false;
    score1.innerText = '0';
    score2.innerText = '0';
    score1.style.color = 'black';
    score2.style.color = 'black';
    rounds.options[0].selected = true;
});
