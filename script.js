const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const score = document.querySelectorAll('#score')
const timer = document.querySelectorAll('#time-left')

let result = 0

//create randomSquare function
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition
}

randomSquare()

square.forEach(id => {
    id.addEventListener('mouseup', randomSquare)
})


//foreach square add eventlistener 'mouseup'
//if id is same as hit position add 1 point

//create movemole function
//create a timer var
//setinterval

//create countdown function