export default class GameView {
  constructor() {
    console.log('init gameview')
  }
  updateBoard(game) {
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index="${i}"]`)
      tile.textContent = game.board[i]
    }
  }
}
