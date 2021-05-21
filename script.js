const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const score = document.querySelector('#score')
const timer = document.querySelector('#time-left')

let result = 0
let hitPosition = 0
let currentTime = timer.textContent

//create randomSquare function
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
            console.log(hitPosition, result);
            randomSquare()
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000);
}

moveMole()

function countDown() {
    currentTime--
    timer.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('Game over! Score: ' + result)
    }
}

timerId = setInterval(countDown, 1000)