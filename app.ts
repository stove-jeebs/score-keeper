const rounds = document.querySelector('#select') as HTMLSelectElement
const btn1 = document.querySelector('#player1') as HTMLButtonElement
const btn2 = document.querySelector('#player2') as HTMLButtonElement
const resetBtn = document.querySelector('#reset') as HTMLButtonElement
const score1 = document.querySelector('#score1') as HTMLSpanElement
const score2 = document.querySelector('#score2') as HTMLSpanElement

function disableButtons() {
	btn1.disabled = true
	btn2. disabled = true
}

btn1?.addEventListener('click', function (event) {
	score1!.innerText = `${parseInt(score1!.innerText) + 1}`
	let value = rounds?.value
	if (score1!.innerText == value) {
		score1.style.color = 'green'
		score2.style.color = 'red'
		disableButtons()
	}
})

btn2?.addEventListener('click', function (event) {
	score2!.innerText = `${parseInt(score2!.innerText) + 1}`
	let value = rounds?.value
	if (score2!.innerText == value) {
		score2.style.color = 'green'
		score1.style.color = 'red'
		disableButtons()
	}
})

resetBtn?.addEventListener('click', function (event) {
	btn1.disabled = false
	btn2. disabled = false
	score1.innerText = '0'
	score2.innerText = '0'
	score1.style.color = 'black'
	score2.style.color = 'black'
	rounds!.options[0].selected = true
})
