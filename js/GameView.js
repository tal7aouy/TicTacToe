export default class GameView {
  updateBoard(game) {
    this.updateTurn(game)
    let WinningCombinations = game.findWinningCombinations()
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index="${i}"]`)
      // remove .winner-tile
      tile.classList.remove('winner-tile')
      tile.textContent = game.board[i]
      let colorClass = game.board[i] == 'X' ? 'tile-x' : 'tile-o'
      // ?? is called Nullish coalescing in ES2020
      tile.innerHTML = `<span class="${colorClass}">${
        game.board[i] ?? ''
      }</span>`
      // check the winner class
      if (WinningCombinations && WinningCombinations.includes(i)) {
        tile.classList.add('winner-tile')
      }
    }
  }
  updateTurn(game) {
    let playerX = document.querySelector('.player-x')
    let playerO = document.querySelector('.player-o')
    playerX.classList.remove('active')
    playerX.classList.remove('acive')
    if (game.turn === 'X') {
      playerX.classList.add('active')
    } else {
      playerO.classList.add('active')
    }
  }
}
