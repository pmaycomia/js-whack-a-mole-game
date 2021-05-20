const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const score = document.querySelector('#score')
const timer = document.querySelector('#time-left')

let result = 0
let hitPosition = 0

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
        }
    })
})


//foreach square add eventlistener 'mouseup'
//if id is same as hit position add 1 point

//create movemole function

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000);
}

moveMole()
    //create countdown function