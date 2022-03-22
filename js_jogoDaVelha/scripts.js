import consoleFunc from './scriptImport.js';

consoleFunc();

const xClass = "x"
const oClass = 'o'
const winningCombnation = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning]')
const restartButton = document.getElementById('restartButton')

let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame(){
    circleTurn = false
    cellElements.forEach(cell =>{
        cell.classList.remove(xClass)
        cell.classList.remove(oClass)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {
            once: true
        })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

