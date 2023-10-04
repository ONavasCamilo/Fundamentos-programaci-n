const board = document.querySelector('.board')

let currentPlayer = 'X'
let cells = Array.from({length: 9})

for(let i = 0; i< 9; i++){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.addEventListener('click', ()=> makeMove(i))
    board.appendChild(cell)
}

function makeMove(index){
    if(cells[index]) return

    cells[index] = currentPlayer
    board.children[index].textContent = currentPlayer
    board.children[index].classList.add(currentPlayer)

    if(checkWin()) {
        alert('HAS '+ currentPlayer+ ' GANADO')
        resetGame()
        return
    }
    if(checkDraw()){
        alert('un empate')
        resetGame()
        return
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

function checkWin(){
    const winningCombos = [

        [0,1,2], [3,4,5], [6,7,8], // Filas
        [0,3,6], [1,4,7], [2,5,8], // Columnas
        [0,4,8], [2,4,6]
    ]
    return winningCombos.some(combo =>{
        const [a,b,c] = combo
        return(

            cells[a] && cells[a] === cells[b] && cells[a] === cells[c]
        )
    })
}

function checkDraw(){
    return cells.every(cell => cell)
}

function resetGame(){
    cells = Array.from({length: 9})
    board.querySelectorAll('.cell').forEach(cell =>{
        cell.textContent = ''
        cell.classList.remove('X', 'O')
    })
    currentPlayer = 'x'
}